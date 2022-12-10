
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDG4OL3zTNQ8iMGxrV9o4TyB7o35pbkCp8",
  authDomain: "proyectoalejandroreact.firebaseapp.com",
  projectId: "proyectoalejandroreact",
  storageBucket: "proyectoalejandroreact.appspot.com",
  messagingSenderId: "48085190763",
  appId: "1:48085190763:web:4127abd13b7162fa8d492e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
