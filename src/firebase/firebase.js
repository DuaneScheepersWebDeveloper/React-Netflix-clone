// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
	appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//=================================================================
//Note to the person marking my project this is my API key details.
//Please Make use of them to enable the project to work using Firebase

// const firebaseConfig = {
// 	apiKey: 'AIzaSyCHJYb9St0pXflGVQ0RqjqR97-V5QaZVO0',
// 	authDomain: 'netflix-react-portfolio-caf2f.firebaseapp.com',
// 	projectId: 'netflix-react-portfolio-caf2f',
// 	storageBucket: 'netflix-react-portfolio-caf2f.appspot.com',
// 	messagingSenderId: '288084971623',
// 	appId: '1:288084971623:web:e551331ea9c8bea91184c2',
// };
