import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"; // Importing getAuth from Firebase Auth
import { addDoc,collection, getFirestore } from "firebase/firestore"; // Importing Firestore
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCZ7lR2GKlAbAOZw-SDfC8bUKMo6gcXAe4",
  authDomain: "netflix-clone-dc722.firebaseapp.com",
  projectId: "netflix-clone-dc722",
  storageBucket: "netflix-clone-dc722.appspot.com",
  messagingSenderId: "884593950958",
  appId: "1:884593950958:web:b5076a002e39d8f54c33ff",
  measurementId: "G-Q2Q12GZ33C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    // alert(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    // alert(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
