import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthContextProvider } from './context/Auth/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
	return (
		<div className="App">
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/account" element={<Account />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	);
};

export default App;
