import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwKYPz4VFjzy6iO9KGjLTjTlejvb3O5x0",
    authDomain: "disney-clone-d94ba.firebaseapp.com",
    databaseURL: "https://disney-clone-d94ba-default-rtdb.firebaseio.com",
    projectId: "disney-clone-d94ba",
    storageBucket: "disney-clone-d94ba.appspot.com",
    messagingSenderId: "511873480314",
    appId: "1:511873480314:web:c596ad87d87f7e0ec46dc3",
    measurementId: "G-MXY1LZP1CB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, provider, storage, signInWithPopup };


