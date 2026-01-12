// Cache =it is saved data that is kept around so we can reuse it instead of downloading it again
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type CacheEntry<T> = {
    data: T;
    timestamp: number; // when it was fetch
};

type Config = {
    maxAge: number; // expiration in miliseconds ms
};

type State<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
    source: "cache" | "network" | null;
};


export function useDataFetching<T>(url: string, config: Config) {
    const { maxAge } = config;

    const cache = useRef<Map<string, CacheEntry<T>>>(new Map());

    const [state, setState] = useState<State<T>>({
        data: null,
        loading: false,
        error: null,
        source: null,
    });

    const isCachedValid = useCallback(
        (entry: CacheEntry<T>) => {
            const age = Date.now() - entry.timestamp;
            return age < maxAge;
        },
        [maxAge]
    );

    const fetchData = useCallback(
        async (opts?: { bypassCache?: boolean }) => {
            const bypassCache = opts?.bypassCache ?? false;

            // lets use cache if allowed and valid
            if (!bypassCache) {
                const cached = cache.current.get(url);
                if (cached !== undefined && isCachedValid(cached)) {
                    setState({ data: cached.data, loading: false, error: null, source: "cache" });
                    return;
                }
            }

            // otherwise fetch
            setState((prev) => ({ ...prev, loading: true, error: null }));

            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
                }

                const json = (await res.json()) as T;
                cache.current.set(url, { data: json, timestamp: Date.now() });
                setState({ data: json, loading: false, error: null, source: "network" });

            } catch (error) {
                const message = error instanceof Error ? error.message : "Unknonw error occurred";
                setState((prev) => ({ ...prev, loading: false, error: message }));
            }
        },
        [url, isCachedValid]
    );


    // fetch on first mount and when url changes
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const refetch = useCallback(() => {
        return fetchData({ bypassCache: true });
    }, [fetchData]);

    const recheck = useCallback(() => {
        return fetchData(); //cache-first
    }, [fetchData]);

    const invalidateCache = useCallback(() => {
        cache.current.delete(url);
    }, [url]);

    const api = useMemo(
        () => ({ ...state, refetch, invalidateCache, recheck }),
        [state, refetch, invalidateCache, recheck]
    );

    return api;
}