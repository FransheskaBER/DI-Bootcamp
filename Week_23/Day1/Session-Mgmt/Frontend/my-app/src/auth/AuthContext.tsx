import { createContext, useContext, useEffect, useMemo, useState } from "react";

type MeResponse = { userId: number };

type AuthContextValue = {
    user: MeResponse | null;
    loading: boolean;
    refreshMe: () => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
    const ctx = useContext(AuthContext);

    if (!ctx) {
        throw new Error("useAuth must be used withing an AuthProvider");
    }

    return ctx;
}

const API_BASE = "http://localhost:8000";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<MeResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function refreshMe() {
        const res = await fetch(`${API_BASE}/auth/me`, {
            method: "GET",
            credentials: "include",
        });

        if (res.status === 401) {
            setUser(null);
            return;
        }

        const data: MeResponse = await res.json();
        setUser(data);
    }

    async function login(email: string, password: string) {
        const res = await fetch(`${API_BASE}/auth/login`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error("Login Failed");
        }

        await refreshMe();
    }

    async function logout() {
        await fetch(`${API_BASE}/auth/logout`, {
            method: "POST",
            credentials: "include",
        });

        setUser(null);
    }

    useEffect(() => {
        refreshMe().finally(() => setLoading(false));
    }, []);

    async function register(email: string, password: string) {
        const res = await fetch(`${API_BASE}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error("Register failed");
        }
    }

    const value = useMemo<AuthContextValue>(
        () => ({ user, loading, refreshMe, login, logout, register }),
        [user, loading]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}