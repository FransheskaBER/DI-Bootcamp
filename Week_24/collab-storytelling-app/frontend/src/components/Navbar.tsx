import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout } from '../features/authSlice';

export default function Navbar() {
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        navigate('/login');
    }

    if (!isAuthenticated) {
        return null; // dont show navbar on login/signup pages
    }

    return (
        <nav className="navbar bg-base-100 shadow-lg">
            <div className="container mx-auto">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">
                        📚 Storytelling App
                    </Link>
                </div>
                
                <div className="flex-none gap-2">

                    <Link to="/stories/new" className="btn btn-primary btn-sm text-white">
                        ➕ New Story
                    </Link>
                
                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-10">
                                <span className="text-xl">{user?.username.charAt(0).toUpperCase()}</span>
                            </div>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="menu-title">
                                <span>
                                    {user?.username}
                                </span>
                            </li>
                            <li><Link to="/">
                                    All Stories
                                </Link></li>
                            <li>
                                <Link to="/my-stories">
                                    My Stories
                                </Link></li>
                            <li>
                                <button onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
}