import { AuthProvider } from './auth/AuthContext.tsx';
import AuthGate from './components/AuthGate.tsx';

// function Content() {
//   const { user, loading, login, logout } = useAuth();
//   const [email, setEmail] = useState("test@example.com");
//   const [password, setPassword] = useState("Str0ng!Passw0rd");
//   const [error, setError] = useState<string | null>(null);

//   if (loading) return <p>Loading session…</p>;

//   if (!user) {
//     return (
//       <div style={{ display: "grid", gap: 8, maxWidth: 360 }}>
//         <h2>Logged out</h2>

//         <label>
//           Email
//           <input value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>

//         <label>
//           Password
//           <input
//             value={password}
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>

//         <button
//           onClick={async () => {
//             setError(null);
//             try {
//               await login(email, password);
//             } catch (e) {
//               setError("Login failed");
//             }
//           }}
//         >
//           Login
//         </button>

//         {error && <p style={{ color: "crimson" }}>{error}</p>}
//       </div>
//     );
//   }

//   return (
//     <div style={{ display: "grid", gap: 8 }}>
//       <h2>Logged in</h2>
//       <p>Your userId: {user.userId}</p>
//       <button onClick={logout}>Logout</button>
//       <p>Now refresh the page — you should stay logged in.</p>
//     </div>
//   );
// }

function App() {
  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  )
}

export default App
