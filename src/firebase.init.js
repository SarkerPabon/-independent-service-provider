// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA8rKsJvQNk5dq9lCg5pI22vXWXNAzw9kA",
	authDomain: "independent-service-prov-b0f8a.firebaseapp.com",
	projectId: "independent-service-prov-b0f8a",
	storageBucket: "independent-service-prov-b0f8a.appspot.com",
	messagingSenderId: "95549698906",
	appId: "1:95549698906:web:296c9aaeaad96bcc89f963",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
