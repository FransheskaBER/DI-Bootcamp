import { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { getContributors, addContributor, removeContributor, getAllUsers } from '../services/api';
import { type Contributor } from '../../../types/index';

interface User {
  id: number;
  username: string;
  email: string;
  avatar_url?: string;
}

interface ContributorWithUser extends Contributor {
  user?: User;
}

interface ContributorsProps {
  storyId: number;
  authorId: number;
}

export default function Contributors({ storyId, authorId }: ContributorsProps) {
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const [contributors, setContributors] = useState<ContributorWithUser[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState('');

  const isAuthor = user?.id === authorId;

  useEffect(() => {
    async function loadData() {
      if (!accessToken) return;

      try {
        const [contributorsData, usersData] = await Promise.all([
          getContributors(storyId, accessToken),
          getAllUsers(accessToken),
        ]);
        
        // Map contributors with user info
        const contributorsWithUsers = contributorsData.map((c: Contributor) => {
          const userData = usersData.find((u: User) => u.id === c.user_id);
          return { ...c, user: userData };
        });
        
        setContributors(contributorsWithUsers);
        
        // Filter out users who are already contributors or the author
        const contributorIds = contributorsData.map((c: Contributor) => c.user_id);
        const availableUsers = usersData.filter(
          (u: User) => u.id !== authorId && !contributorIds.includes(u.id)
        );
        setAllUsers(availableUsers);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [storyId, authorId, accessToken]);

  async function handleAddContributor() {
    if (!selectedUserId || !accessToken) return;

    setAdding(true);
    setError('');

    try {
      const newContributor = await addContributor(storyId, selectedUserId, accessToken);
      
      // Find user data for the new contributor
      const userData = allUsers.find(u => u.id === selectedUserId);
      const contributorWithUser = { ...newContributor, user: userData };
      
      setContributors([...contributors, contributorWithUser]);
      
      // Remove added user from available users
      setAllUsers(allUsers.filter(u => u.id !== selectedUserId));
      setSelectedUserId(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setAdding(false);
    }
  }

  async function handleRemoveContributor(contributorId: number) {
    if (!accessToken) return;

    const confirmed = window.confirm('Remove this contributor?');
    if (!confirmed) return;

    try {
      await removeContributor(contributorId, accessToken);
      const removedContributor = contributors.find(c => c.id === contributorId);
      setContributors(contributors.filter(c => c.id !== contributorId));
      
      // Add user back to available users
      if (removedContributor?.user) {
        setAllUsers([...allUsers, removedContributor.user]);
      }
    } catch (err: any) {
      alert(err.message);
    }
  }

  if (loading) {
    return <div className="text-center">Loading contributors...</div>;
  }

  return (
    <div className="card bg-base-200 mt-6">
      <div className="card-body">
        <h3 className="card-title">Contributors</h3>

        {error && (
          <div className="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        )}

        {contributors.length === 0 ? (
          <p className="text-base-content/60">No contributors yet</p>
        ) : (
          <ul className="space-y-2">
            {contributors.map((contributor) => (
              
              <li key={contributor.id} className="flex justify-between items-center p-3 bg-base-100 rounded">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      {contributor.user?.avatar_url ? (
                        <img src={contributor.user.avatar_url} alt={contributor.user.username} />
                      ) : (
                        <div className="bg-neutral text-neutral-content w-10 h-10 rounded-full flex items-center justify-center">
                          <span className="text-sm">
                            {contributor.user?.username?.charAt(0).toUpperCase() || '?'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Username */}
                  <span className="font-semibold">{contributor.user?.username || 'Unknown'}</span>
                </div>
                
                {isAuthor && (
                  <button
                    onClick={() => handleRemoveContributor(contributor.id)}
                    className="btn btn-error btn-xs"
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}

        {isAuthor && allUsers.length > 0 && (
          <div className="mt-4">
            <label className="label">
              <span className="label-text">Add Contributor</span>
            </label>
            <div className="flex gap-2">
              <select
                className="select select-bordered flex-1"
                value={selectedUserId || ''}
                onChange={(e) => setSelectedUserId(Number(e.target.value))}
              >
                <option value="">Select a user...</option>
                {allUsers.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.username} ({user.email})
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddContributor}
                className={`btn btn-primary ${adding ? 'loading' : ''}`}
                disabled={!selectedUserId || adding}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}