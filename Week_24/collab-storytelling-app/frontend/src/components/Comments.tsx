import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { getComments, addCommentApi, updateCommentApi, deleteCommentApi, getAllUsers, toggleReaction } from "../services/api";
import { type Comment } from "../../../types/index";

interface User {
    id: number;
    username: string;
    email: string;
    avatar_url?: string;
}

interface CommentWithUser extends Comment {
    user?: User;
}

interface CommentsProps {
    storyId: number;
    storyAuthorId: number;
    commentsEnabled: boolean;
    onToggleComments: () => void;
}

export default function Comments({ storyId, storyAuthorId, commentsEnabled, onToggleComments }: CommentsProps) {
    const { accessToken, user } = useAppSelector((state) => state.auth);
    const [comments, setComments] = useState<CommentWithUser[]>([]);
    const [newCommentText, setNewCommentText] = useState('');
    const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState('');
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function loadComments() {
            if (!accessToken) return;

            try {
                const [commentsData, usersData] = await Promise.all([
                    getComments(storyId, accessToken),
                    getAllUsers(accessToken),
                ]);

                // Map comments with user info
                const commentsWithUsers = commentsData.map((c: Comment) => {
                    const userData = usersData.find((u: User) => u.id === c.user_id);
                    return { ...c, user: userData };
                });
                setComments(commentsWithUsers);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadComments();
    }, [storyId, accessToken]);

    async function handleAddComment(e: React.FormEvent) {
        e.preventDefault();
        if (!accessToken || !newCommentText.trim()) return;

        setSubmitting(true);
        setError('');

        try {
            const newComment = await addCommentApi(storyId, newCommentText, accessToken);

            // Add user info to new comment
            const commentWithUser = { ...newComment, user };
            setComments([...comments, commentWithUser]);
            setNewCommentText('');
        } catch (error: any) {
            setError(error.message);
        } finally {
            setSubmitting(false);
        }
    }

    async function handleUpdateComment(commentId: number) {
        if (!accessToken || !editingText.trim()) return;

        setSubmitting(true);
        setError('');

        try {
            const updatedComment = await updateCommentApi(commentId, editingText, accessToken);

            setComments(comments.map((c) => c.id === commentId ? { ...updatedComment, user: c.user } : c ));
            setEditingCommentId(null);
            setEditingText('');
        } catch (error: any) {
            setError(error.message);
        } finally {
            setSubmitting(false);
        }
    }

    async function handleDeleteComment(commentId: number) {
        if (!accessToken) return;

        const confirmed = window.confirm('Delete this comment?');
        if (!confirmed) return;

        try {
            await deleteCommentApi(commentId, accessToken);
            setComments(comments.filter((c) => c.id !== commentId));
        } catch (error: any) {
            alert(error.message);
        }
    }

    function startEditing(comment: CommentWithUser) {
        setEditingCommentId(comment.id);
        setEditingText(comment.comment_text);
    }

    function cancelEditing() {
        setEditingCommentId(null);
        setEditingText('');
    }

    async function handleToggleReaction(commentId: number, reactionType: string) {
        if (!accessToken) return;

        // optimistic update = update UI inmediately (UI updates instantly before backend responds)
        setComments(prevComments => prevComments.map(comment => {
            if (comment.id !== commentId) return comment;

            const reactions = { ...comment.reactions || {} };
            const userReacted = [ ...(comment.user_reacted || []) ];
            const hasReacted = userReacted.includes(reactionType);

            if (hasReacted) {
                // remove reaction
                reactions[reactionType] = (reactions[reactionType] || 1) - 1;
                if (reactions[reactionType] <= 0) {
                    delete reactions[reactionType];
                }
                const index = userReacted.indexOf(reactionType);
                userReacted.splice(index, 1);
            } else {
                // add reaction
                reactions[reactionType] = (reactions[reactionType] || 0) + 1;
                userReacted.push(reactionType);
            }
            
            return { ...comment, reactions, user_reacted: userReacted }; 
        }));

        // send to backend
        try {
            await toggleReaction(commentId, reactionType, accessToken);
        } catch (error: any) {
            // rollback on error
            setError('Failed to update reaction');
            // reload comments to get correct state
            const commentsData = await getComments(storyId, accessToken);
            const usersData = await getAllUsers(accessToken);
            const commentsWithUsers = commentsData.map((c: Comment) => {
                const userData = usersData.find((u: User) => u.id === c.user_id);
                return { ...c, user: userData };
            });
            setComments(commentsWithUsers);
        }
    }

    if (loading) {
        return <div className="text-center">Loading comments...</div>;
    }

    const isStoryAuthor = user?.id === storyAuthorId;

    return (
        <div className="card bg-base-200 mt-6">
            <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="card-title">
                        Comments ({ comments.length })
                    </h3>
                    {isStoryAuthor && (
                        <button onClick={onToggleComments} className="btn btn-sm btn-ghost">
                            {commentsEnabled ? 'Disable Comments' : 'Enable Comments'}
                        </button>
                    )}
                </div>

                {!commentsEnabled && (
                    <div className="alert alert-info mb-4">
                        <span>Comments are disabled on this story.</span>
                    </div>
                )}

                {error && (
                    <div className="alert alert-error mb-4">
                        <span>{error}</span>
                    </div>
                )}

                {commentsEnabled && (
                    <>
                    {/* add comment form */}
                    <form onSubmit={handleAddComment} className="mb-6">
                        <div className="form-control">
                            <textarea value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} rows={3} placeholder="Add a comment..." className="textarea textarea-bordered"/>
                        </div>
                        <button type="submit" disabled={submitting || !newCommentText.trim()} className={`btn btn-primary btn-sm mt-2 ${submitting ? 'loading' : ''}`}>
                            Post Comment
                        </button>
                    </form>

                    {/* comments list */}
                    {comments.length === 0 ? (
                        <p className="text-base-content/60">
                            Add your first comment to this story.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {comments.map((comment) => {
                                const isCommentAuthor = user?.id === comment.user_id;
                                const canDelete = isCommentAuthor || isStoryAuthor;
                                const isEditing = editingCommentId === comment.id;

                                return (
                                    <div key={comment.id} className="card bg-base-100 shadow">
                                        <div className="card-body p-4">
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-start gap-3 flex-1">
                                                    
                                                    {/* Avatar */}
                                                    <div className="avatar">
                                                        <div className="w-10 rounded-full">
                                                        {comment.user?.avatar_url ? (
                                                            <img src={comment.user.avatar_url} alt={comment.user.username} />
                                                        ) : (
                                                            <div className="bg-neutral text-neutral-content w-10 h-10 rounded-full flex items-center justify-center">
                                                                <span className="text-sm">
                                                                    {comment.user?.username?.charAt(0).toUpperCase() || '?'}
                                                                </span>
                                                            </div>
                                                        )}
                                                        </div>
                                                    </div>
                                                    
                                                    {/* User info */}
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-sm">
                                                            {comment.user?.username || 'Unknown User'}
                                                        </p>
                                                        <p className="text-xs text-base-content/60">
                                                            {new Date(comment.created_at).toLocaleString()}
                                                        </p>
                                                    </div>
                                                </div>

                                                {(isCommentAuthor || canDelete) && !isEditing && (
                                                    <div className="flex gap-2">
                                                        {isCommentAuthor && (
                                                            <button onClick={() => startEditing(comment)} className="btn btn-ghost btn-xs">
                                                                Edit
                                                            </button>
                                                        )}
                                                        {canDelete && (
                                                            <button onClick={() => handleDeleteComment(comment.id)} className="btn btn-error btn-xs">
                                                                Delete
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            {isEditing ? (
                                                <div className="mt-2">
                                                    <textarea value={editingText} onChange={(e) => setEditingText(e.target.value)} rows={3} className="textarea textarea-bordered w-full"/>
                                                    <div className="flex gap-2 mt-2">
                                                        <button disabled={submitting} onClick={() => handleUpdateComment(comment.id)} className={`btn btn-primary btn-xs ${submitting ? 'loading' : ''}`} >
                                                            Save
                                                        </button>
                                                        <button onClick={cancelEditing} className="btn btn-ghost btn-xs">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <p className="mt-2 whitespace-pre-wrap">
                                                    {comment.comment_text}
                                                </p>
                                            )}
                                            {/* Reactions */}
                                            <div className="flex gap-2 mt-3">
                                                {['like', 'heart', 'laugh', 'wow'].map((reactionType) => {
                                                    const count = comment.reactions?.[reactionType] || 0;
                                                    const hasReacted = comment.user_reacted?.includes(reactionType);
                                                    const emoji = { like: '👍', heart: '❤️', laugh: '😂', wow: '😮' }[reactionType];

                                                    return (
                                                        <button key={reactionType} onClick={() => handleToggleReaction(comment.id, reactionType)} className={`btn btn-xs ${hasReacted ? 'btn-primary' : 'btn-ghost'}`}>
                                                            {emoji} {count > 0 && count}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    </>
                )}
            </div>
        </div>
    );
}