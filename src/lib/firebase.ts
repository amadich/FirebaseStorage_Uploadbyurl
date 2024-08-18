// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEHBo5pWB6bkQ3vnXnRngCHJIk30ns3fI",
  authDomain: "route-c985b.firebaseapp.com",
  projectId: "route-c985b",
  storageBucket: "route-c985b.appspot.com",
  messagingSenderId: "610227800051",
  appId: "1:610227800051:web:4ec97be6cde9795f017486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };