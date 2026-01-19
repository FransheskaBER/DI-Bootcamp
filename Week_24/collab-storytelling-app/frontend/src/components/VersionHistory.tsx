import { useState, useEffect } from 'react';
import { getVersionHistory, restoreVersion } from '../services/api';
import type { Version } from '../../../types';

interface VersionHistoryProps {
    storyId: number;
    token: string;
    onRestore: (story: any) => void;
}

export default function VersionHistory({ storyId, token, onRestore }: VersionHistoryProps) {
    const [versions, setVersions] = useState<Version[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [restoring, setRestoring] = useState<number | null>(null);
    const [previewVersion, setPreviewVersion] = useState<Version | null>(null);

    useEffect(() => {
        loadVersions();
    }, [storyId, token]);

    async function loadVersions() {
        try {
            setLoading(true);
            const data = await getVersionHistory(storyId, token);
            setVersions(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function handleRestore(versionId: number) {
        if (!confirm('Are you sure you want to restore this version? Your current content will be saved as a new version.')) {
            return;
        }

        try {
            setRestoring(versionId);
            const result = await restoreVersion(storyId, versionId, token);
            onRestore(result.story);
            await loadVersions(); // Refresh the version list
            setPreviewVersion(null);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setRestoring(null);
        }
    }

    function formatDate(date: Date) {
        return new Date(date).toLocaleString();
    }

    if (loading) {
        return (
            <div className="flex justify-center p-4">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-error">
                <span>{error}</span>
            </div>
        );
    }

    if (versions.length === 0) {
        return (
            <div className="text-center text-gray-500 p-4">
                No version history available yet. Versions are created when you save changes.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Version History</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Version</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {versions.map((version) => (
                            <tr key={version.id} className={previewVersion?.id === version.id ? 'bg-primary/10' : ''}>
                                <td>
                                    <span className="badge badge-outline">v{version.version_number}</span>
                                </td>
                                <td className="max-w-xs truncate">{version.title}</td>
                                <td className="text-sm text-gray-500">{formatDate(version.created_at)}</td>
                                <td className="space-x-2">
                                    <button
                                        className="btn btn-xs btn-ghost"
                                        onClick={() => setPreviewVersion(previewVersion?.id === version.id ? null : version)}
                                    >
                                        {previewVersion?.id === version.id ? 'Hide' : 'Preview'}
                                    </button>
                                    <button
                                        className={`btn btn-xs btn-primary ${restoring === version.id ? 'loading' : ''}`}
                                        onClick={() => handleRestore(version.id)}
                                        disabled={restoring !== null}
                                    >
                                        {restoring === version.id ? '' : 'Restore'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {previewVersion && (
                <div className="card bg-base-200 shadow-lg">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <h4 className="card-title text-base">
                                Preview: Version {previewVersion.version_number}
                            </h4>
                            <button
                                className="btn btn-sm btn-ghost"
                                onClick={() => setPreviewVersion(null)}
                            >
                                Close
                            </button>
                        </div>
                        <div className="divider my-1"></div>
                        <div>
                            <p className="font-semibold text-sm text-gray-500">Title:</p>
                            <p className="mb-3">{previewVersion.title}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-gray-500">Content:</p>
                            <div className="bg-base-100 p-3 rounded-lg max-h-64 overflow-y-auto whitespace-pre-wrap">
                                {previewVersion.content}
                            </div>
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <button
                                className={`btn btn-primary btn-sm ${restoring === previewVersion.id ? 'loading' : ''}`}
                                onClick={() => handleRestore(previewVersion.id)}
                                disabled={restoring !== null}
                            >
                                Restore This Version
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
