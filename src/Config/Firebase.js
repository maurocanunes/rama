import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANHopmrC6vDU5T7JOKRl4Kbcmw7BtpbWc",
  authDomain: "rama-abbd7.firebaseapp.com",
  projectId: "rama-abbd7",
  storageBucket: "rama-abbd7.appspot.com",
  messagingSenderId: "262172403465",
  appId: "1:262172403465:web:4f9fa0a1fde0ced94c15d8",
  measurementId: "G-DT4YCWK0GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.useDeviceLanguage();
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const messagesCollectionRef = collection(db, 'messages')


export {
  auth,
  googleProvider,
  db,
  messagesCollectionRef
}
