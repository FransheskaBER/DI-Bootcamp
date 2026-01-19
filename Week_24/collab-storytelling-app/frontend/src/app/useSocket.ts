import { useEffect, useRef, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAppSelector } from './hooks';

const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface StoryUpdateData {
    storyId: number;
    content: string;
    title?: string;
    editedBy: number;
}

interface UseSocketOptions {
    storyId: number;
    onStoryUpdate?: (data: StoryUpdateData) => void;
    onUserJoined?: (data: { userId: number }) => void;
    onUserLeft?: (data: { userId: number }) => void;
    onError?: (data: { message: string }) => void;
}

export function useSocket({ storyId, onStoryUpdate, onUserJoined, onUserLeft, onError }: UseSocketOptions) {
    const socketRef = useRef<Socket | null>(null);
    const { accessToken } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!accessToken || !storyId) return;

        // Create socket connection with JWT auth
        const socket = io(SOCKET_URL, {
            auth: {
                token: accessToken,
            },
        });

        socketRef.current = socket;

        // Connection events
        socket.on('connect', () => {
            console.log('Socket connected:', socket.id);
            // Join the story room
            socket.emit('join-story', storyId);
        });

        socket.on('joined-story', (data) => {
            console.log('Joined story room:', data);
        });

        socket.on('connect_error', (err) => {
            console.error('Socket connection error:', err.message);
            onError?.({ message: err.message });
        });

        // Story collaboration events
        socket.on('story-updated', (data: StoryUpdateData) => {
            console.log('Story updated by another user:', data);
            onStoryUpdate?.(data);
        });

        socket.on('user-joined', (data: { userId: number }) => {
            console.log('User joined the room:', data);
            onUserJoined?.(data);
        });

        socket.on('user-left', (data: { userId: number }) => {
            console.log('User left the room:', data);
            onUserLeft?.(data);
        });

        socket.on('error', (data: { message: string }) => {
            console.error('Socket error:', data.message);
            onError?.(data);
        });

        // Cleanup on unmount
        return () => {
            socket.emit('leave-story', storyId);
            socket.disconnect();
            socketRef.current = null;
        };
    }, [accessToken, storyId, onStoryUpdate, onUserJoined, onUserLeft, onError]);

    // Function to emit story edits
    const emitEdit = useCallback((content: string, title?: string) => {
        if (socketRef.current?.connected) {
            socketRef.current.emit('story-edit', {
                storyId,
                content,
                title,
            });
        }
    }, [storyId]);

    return { emitEdit, socket: socketRef.current };
}
