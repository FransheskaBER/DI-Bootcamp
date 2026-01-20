// User data from DATABASE
export interface User {
    id: string;
    email: string;
    username: string;
    password_hash: string;
    bio: string;
    created_at: Date;
    updated_at: Date;
}

// Data we send back to the client (no password)
export interface UserResponse {
    id: string;
    email: string;
    username: string;
    bio: string;
    created_at: Date;
    updated_at: Date;
}

// register request body
export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}

// login request body
export interface LoginRequest {
    email: string;
    password: string;
}

// data stored inside the token
export interface TokenPayload {
    userId: string;
}

// login response (what we send back after successfull login/register)
export interface AuthResponse {
    token: string;
    user: UserResponse;
}
