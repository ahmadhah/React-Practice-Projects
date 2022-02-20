

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'movies');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     console.log(cityList)
// }

// const cityList = getCities(db);

// export { cityList };
// export default getCities;


// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyAwKYPz4VFjzy6iO9KGjLTjTlejvb3O5x0",
//     authDomain: "disney-clone-d94ba.firebaseapp.com",
//     databaseURL: "https://disney-clone-d94ba-default-rtdb.firebaseio.com",
//     projectId: "disney-clone-d94ba",
//     storageBucket: "disney-clone-d94ba.appspot.com",
//     messagingSenderId: "511873480314",
//     appId: "1:511873480314:web:c596ad87d87f7e0ec46dc3",
//     measurementId: "G-MXY1LZP1CB"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

