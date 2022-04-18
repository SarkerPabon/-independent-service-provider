// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
	apiKey: "AIzaSyA8rKsJvQNk5dq9lCg5pI22vXWXNAzw9kA",
	authDomain: "independent-service-prov-b0f8a.firebaseapp.com",
	projectId: "independent-service-prov-b0f8a",
	storageBucket: "independent-service-prov-b0f8a.appspot.com",
	messagingSenderId: "95549698906",
	appId: "1:95549698906:web:296c9aaeaad96bcc89f963",
}; */
const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
