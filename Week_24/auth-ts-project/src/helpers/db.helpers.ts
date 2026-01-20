import type { User, UserResponse } from "../types.js";


// Helper to convert User to UserResponse (remove hash_password)
export function getUserWithoutPassword(user: User): UserResponse {
    const { password_hash, ...userInfo } = user;
    return userInfo;
} 

