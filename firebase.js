import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzh8oHkXvdzfidxJH2DWgewF7g-2TRosM",
  authDomain: "awny-community.firebaseapp.com",
  projectId: "awny-community",
  storageBucket: "awny-community.appspot.com",
  messagingSenderId: "1018722787129",
  appId: "1:1018722787129:web:ffca7c46709c024374d2e8",
  measurementId: "G-Q622SCS2S4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
