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