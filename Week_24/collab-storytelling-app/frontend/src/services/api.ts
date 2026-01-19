// API service to handle all backend communication
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


// helper function to add Authorization header
function getAuthHeaders(token: string | null) {
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}

// Auth endpoints
export async function registerUser(username: string, email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Include cookies
        body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
    }

    return response.json();
}

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Include cookies
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
    }

    return response.json();
}

export async function refreshAccessToken() {
    const response = await fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Token refresh failed');
    }

    return response.json();
}

// Story endpoints
export async function fetchStories(token: string) {
    const res = await fetch(`${API_URL}/stories`, {
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed at fetch stories');
    }

    return res.json();
}

export async function fetchStoryById(id: number, token: string) {
    const res = await fetch(`${API_URL}/stories/${id}`, {
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed at fetch story by id');
    }

    return res.json();
}

export async function createStory(title: string, content: string, token: string) {
    const res = await fetch(`${API_URL}/stories`, {
        method: 'POST',
        headers: getAuthHeaders(token),
        credentials: 'include',
        body: JSON.stringify({ title, content }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to create a story');
    }

    return res.json();
}

export async function updateStory(id: number, title: string, content: string, token: string) {
    const res = await fetch(`${API_URL}/stories/${id}`, {
        method: 'PATCH',
        headers: getAuthHeaders(token),
        credentials: 'include',
        body: JSON.stringify({ title, content }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to update story');
    }

    return res.json();
}

export async function deleteStory(id: number, token: string) {
    const res = await fetch(`${API_URL}/stories/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed to delete a story');
    }

    return res.json();
}

export async function getCurrentUser(token: string) {
    const res = await fetch(`${API_URL}/auth/me`, {
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch current user');
    }

    return res.json();
}

export async function toggleCommentsEnabled(storyId: number, token: string) {
    const res = await fetch(`${API_URL}/stories/${storyId}/toggle-comments`, {
        method: 'POST',
        headers: getAuthHeaders(token),
        credentials: 'include'
    });

    if (!res.ok) {
        throw new Error('Failed to toggle comments');
    }

    return res.json();
}

// contributors endpoints
export async function getContributors(storyId: number, token: string) {
    const res = await fetch(`${API_URL}/contributors/${storyId}`, {
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch contributors');
    }

    return res.json();
}

export async function addContributor(storyId: number, userId: number, token: string) {
    const res = await fetch(`${API_URL}/contributors`, {
        method: 'POST',
        headers: getAuthHeaders(token),
        credentials: 'include',
        body: JSON.stringify({ story_id: storyId, user_id: userId }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to add contributor');
    }
    
    return res.json();
}

export async function removeContributor(contributorId: number, token: string) {
  const res = await fetch(`${API_URL}/contributors/${contributorId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
    credentials: 'include',
  });
  
  if (!res.ok) {
    throw new Error('Failed to remove contributor');
  }
  
  return res.json();
}

export async function getAllUsers(token: string) {
  const res = await fetch(`${API_URL}/auth/users`, {
    headers: getAuthHeaders(token),
    credentials: 'include',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return res.json();
}


// comment endpoints
export async function getComments(storyId: number, token: string) {
    const res = await fetch(`${API_URL}/comments/${storyId}`, {
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch comments');
    }

    return res.json();
}

export async function addCommentApi(storyId: number, commentText: string, token: string) {
    const res = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: getAuthHeaders(token),
        credentials: 'include',
        body: JSON.stringify({ story_id: storyId, comment_text: commentText }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to add comment');
    }

    return res.json();
}

export async function updateCommentApi(commentId: number, commentText: string, token: string) {
    const res = await fetch(`${API_URL}/comments/${commentId}`, {
        method: 'PATCH',
        headers: getAuthHeaders(token),
        credentials: 'include',
        body: JSON.stringify({ comment_text: commentText }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to update comment');
    }

    return res.json();
}

export async function deleteCommentApi(commentId: number, token: string) {
    const res = await fetch(`${API_URL}/comments/${commentId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed to delete comment');
    }

    return res.json();
}

export async function toggleReaction(commentId: number, reactionType: string, token: string) {
    const res = await fetch(`${API_URL}/reactions`, {
        method: 'POST',
        headers: getAuthHeaders(token),
        credentials: 'include',
        body: JSON.stringify({ comment_id: commentId, reaction_type: reactionType }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to toggle reaction');
    }
  
    return res.json();
}

export async function uploadAvatar(imageBase64: string, token: string) {
    const res = await fetch(`${API_URL}/upload/avatar`, {
        method: 'POST',
        headers: getAuthHeaders(token),
        credentials: 'include',
        body: JSON.stringify({ image: imageBase64 }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to upload avatar');
    }

    return res.json();
}

// version endpoints
export async function getVersionHistory(storyId: number, token: string) {
    const res = await fetch(`${API_URL}/stories/${storyId}/versions`, {
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to fetch version history');
    }

    return res.json();
}

export async function getVersionById(storyId: number, versionId: number, token: string) {
    const res = await fetch(`${API_URL}/stories/${storyId}/versions/${versionId}`, {
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to fetch version');
    }

    return res.json();
}

export async function restoreVersion(storyId: number, versionId: number, token: string) {
    const res = await fetch(`${API_URL}/stories/${storyId}/versions/${versionId}/restore`, {
        method: 'POST',
        headers: getAuthHeaders(token),
        credentials: 'include',
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to restore version');
    }

    return res.json();
}