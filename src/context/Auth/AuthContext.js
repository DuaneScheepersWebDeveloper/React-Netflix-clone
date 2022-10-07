import { createContext, useContext, useEffect, useState } from 'react'; //imports the various hooks from our react files
import { auth, db } from '../../firebase/firebase'; //imports auth and our db from firebase file
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

//In this application I made use of useContext to allow me to move data via props
//to different levels of th application even if its not required
//-------------------------------------------------------
const AuthContext = createContext();
// made use of createContext to share values between different
//components without having to pass props through out every level explicitly
//(allows me to access different levels )without moving up and down
//-------------------------------------------------------
//  ->made use of children to create an instance in the component been used(check if something is true or false)
//  ->
export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const signUp = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, 'users', email), {
			savedShows: [],
		});
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	});

	return (
		<AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
};
//-------------------------------------------------------
//UserAuth
export const UserAuth = () => {
	return useContext(AuthContext);
};
//-------------------------------------------------------
