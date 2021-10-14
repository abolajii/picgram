import firebase from 'firebase';
import 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase };
