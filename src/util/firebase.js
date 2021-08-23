import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB-d0mV-4J6Ig_jbYs5gY2ujDPj--5ne08",
    authDomain: "to-do-app-bb78e.firebaseapp.com",
    projectId: "to-do-app-bb78e",
    storageBucket: "to-do-app-bb78e.appspot.com",
    messagingSenderId: "442486727585",
    appId: "1:442486727585:web:4538b96d6f1f3bdf5fa1e0",
    measurementId: "G-D0777RLP34"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase