export interface User {
    id: number;
    username: string;
    email: string;
    password_hash?: string;
    avatar_url?: string // user's avatar image url
    created_at?: Date;
}

export interface Story {
    id: number;
    title: string;
    content: string;
    author_id: number;
    author?: User;
    comments_enabled?: boolean; // Whether comments are enabled
    created_at: Date;
    updated_at: Date;
}

export interface Contributor {
    id: number;
    story_id: number;
    user_id: number;
    user?: User;
    created_at?: Date;
}

// auto-related types
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    accessToken: string;
    user: Omit<User, 'password_hash'>; // we will have the user but without the password
}

// comment model
export interface Comment {
    id: number;
    story_id: number;
    user_id: number;
    comment_text: string;
    user?: User; // optional - populated when we fetch with user info
    reactions?: { [key: string]: number }; // reaction counts like { "like": 5, "heart": 3}
    user_reacted?: string[] // reaction types the current user has made
    created_at: Date;
    updated_at: Date;
}

// reaction model
export interface Reaction {
    id: number;
    comment_id: number;
    user_id: number;
    reaction_type: string;
    created_at: Date;
}

// version model (for story version history)
export interface Version {
    id: number;
    story_id: number;
    title: string;
    content: string;
    version_number: number;
    created_at: Date;
}