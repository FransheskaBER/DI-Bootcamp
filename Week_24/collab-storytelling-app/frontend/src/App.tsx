import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from './app/hooks'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CreateStoryPage from './pages/CreateStoryPage'
import StoryViewerPage from './pages/StoryViewerPage'
import EditStoryPage from './pages/EditStoryPage'
import MyStoriesPage from './pages/MyStoriesPage'
import { useAuthRefresh } from './app/hooks'

function ProtectedRoute({ children }: { children: React.ReactNode}) {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
    <Navbar />
    {children}
    </>
  );
}


function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const isChecking = useAuthRefresh();

  // Show loading screen while checking authentication
  if (isChecking) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path='/login' element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />
        <Route path='/signup' element={isAuthenticated ? <Navigate to="/" replace /> : <SignupPage />} />

        {/* Protected routes */}
        <Route path='/' element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
        }
        />
        <Route path="/stories/new" element={
            <ProtectedRoute>
              <CreateStoryPage />
            </ProtectedRoute>
        }
        />
        <Route path="/stories/:id" element={
            <ProtectedRoute>
              <StoryViewerPage />
            </ProtectedRoute>
          }
        />
        <Route path="/stories/:id/edit" element={
            <ProtectedRoute>
              <EditStoryPage />
            </ProtectedRoute>
          }
        />
        <Route path="/my-stories" element={
            <ProtectedRoute>
              <MyStoriesPage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route */}
        <Route path='*' element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
