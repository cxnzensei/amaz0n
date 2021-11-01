import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { firebaseConfig } from "./config";

Firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();
const auth = Firebase.auth();

export { db, auth };
