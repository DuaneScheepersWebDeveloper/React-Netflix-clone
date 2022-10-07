import { createContext, useContext, useEffect, useState } from 'react'; //imports the various hooks from our react files
import { auth, db } from '../../firebase/firebase'; //imports auth and our db from firebase file
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
//all imported from our firebase/auth package to allow us to authenticate users
//,sign in ,sign out and manage our auth state.
//https://firebase.google.com/docs/auth/web/password-auth
import { setDoc, doc } from 'firebase/firestore'; //allows us to use the firebase database

//In this application I made use of useContext to allow me to move data via props
//to different levels of th application even if its not required
//-------------------------------------------------------
const AuthContext = createContext();
// made use of createContext to share values between different
//components without having to pass props through out every level explicitly
//(allows me to access different levels )without moving up and down
//-------------------------------------------------------
//  ->made use of children to create an instance in the component been used(check if something is true or false)
//  ->in signUp we pass our email and password to our firebase db using doc from firestore
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
	//keeps us logged in (on and off state change)
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
//Here is where we create our context
export const UserAuth = () => {
	return useContext(AuthContext);
};
//-------------------------------------------------------
