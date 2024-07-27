import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoApA4FWYAQvJ3z1WjlQisCDESUgznPgw",
    authDomain: "reactproject-d74d9.firebaseapp.com",
    projectId: "reactproject-d74d9",
    storageBucket: "reactproject-d74d9.appspot.com",
    messagingSenderId: "486604053229",
    appId: "1:486604053229:web:cce2bf687bbbeb8ca44ae4",
    measurementId: "G-Q3CZ36NE4N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth service
export const authService = getAuth(app);

export default app;
