import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFtE3zu5KTZR5YHYA7inGuUq9a5QTZ9rk",
  authDomain: "my-ecommerce-website-51fdf.firebaseapp.com",
  projectId: "my-ecommerce-website-51fdf",
  storageBucket: "my-ecommerce-website-51fdf.appspot.com",
  messagingSenderId: "192086980460",
  appId: "1:192086980460:web:28adae514bdbb41a902549",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
