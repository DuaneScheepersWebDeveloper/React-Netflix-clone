import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/Auth/AuthContext';
import pic from '../../assets/images/Logonetflix.png';
const Navbar = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();
	console.log(user);

	const handleLogout = async () => {
		try {
			await logOut();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex items-center justify-between p-4 z-[100] w-full absolute">
			<Link to="/">
				<img src={pic} className="h-20  p-4" alt="NetflixLogo" />
			</Link>
			{user?.email ? (
				<div>
					<Link to="/account">
						<button className="text-white pr-4">Account</button>
					</Link>
					<button
						onClick={handleLogout}
						className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
					>
						Logout
					</button>
				</div>
			) : (
				<div>
					<Link to="/login">
						<button className="text-white pr-4">Sign In</button>
					</Link>
					<Link to="/signup">
						<button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
							Sign Up
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};
export default Navbar;
