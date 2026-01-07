import { createContext, useContext, useEffect, useMemo, useState } from "react";

const API_BASE = "http://localhost:8000";

type AuthContextValueType = {
    isAuthed: boolean;
    loading: boolean;
    refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValueType | null>(null);

type AuthProviderPropsType = {
    children: React.ReactNode;
}


export function AuthProvider({ children }: AuthProviderPropsType) {
    const [isAuthed, setIsAuthed] = useState(false);
    const [loading, setLoading] = useState(true);

    // function that checks if the cookie/session is valid by asking the server
    const refreshAuth = async () => {
        setLoading(true); // we are sarting a check so show loading...

        try {
            const res = await fetch(`${API_BASE}/api/me`, {
                method: "GET",
                credentials: "include",
            });

            if (res.ok) {
                setIsAuthed(true);
            } else if (res.status === 401) {
                setIsAuthed(false); // 401 => not logged in / expired / invalid
            } else {
                setIsAuthed(false); // Any other error code (500, 403, etc.) — safest UI decision is "not authed"
            }
        } catch (err) {
            setIsAuthed(false); // Network errors (server down, CORS issues, offline, etc.)
        } finally {
            setLoading(false);
        }
    };


    // Run refreshAuth once when the provider mounts (app start / page refresh)
    useEffect(() => {
        void refreshAuth(); // `void` avoids "unhandled promise" lint complaints
    }, []);


    // Memoise context value so consumers don't re-render unnecessarily
    const value = useMemo(
        () => ({ isAuthed, loading, refreshAuth }),
        [isAuthed, loading]
    );
    //“Create this { isAuthed, loading, refreshAuth } object,
    // and only recreate it when isAuthed or loading changes.”



    
    // Provide the auth state + functions to the whole app tree below
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const ctx = useContext(AuthContext);

    // if someone uses useAuth() outside <AuthProvider> fail
    if (!ctx) {
        throw new Error("use AuthProvider")
    }

    return ctx; // return { isAuthed, loading, refreshAuth }
}