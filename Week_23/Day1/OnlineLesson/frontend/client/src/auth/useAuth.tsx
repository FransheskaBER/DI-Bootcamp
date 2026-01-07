import { createContext, useContext, useState, type ReactNode } from "react";
import axios from "axios";

type User = {
    userId: number;
    email: string;
    active?: string;
};

type AuthContextValue = {
    isAuth: boolean;
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    refreshToken: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context; // we will have all the values that we will put in the authprovider
}

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps ) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login = (user: User, token: string) => {
        setUser(user);
        setToken(token);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
    };

    const refreshToken = async () => {
        try {
            const res = await axios(`${BASE_URL}/api/user/auth`, {
                withCredentials: true,
            });
            const { user, token } = res.data;
            login(user, token);
        } catch (error) {
            console.log(error);
            logout();
        }
    }

    const isAuth = !!user && !!token;

    return (
        <AuthContext.Provider value={{ isAuth, login, user, token, logout, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};
// to have access to the login add it to the value inside authcontext