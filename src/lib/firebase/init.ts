// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHun-kNI3I0jS472-qIa0ShGRjYcFlC2Y",
  authDomain: "smartwater-36db9.firebaseapp.com",
  projectId: "smartwater-36db9",
  storageBucket: "smartwater-36db9.appspot.com",
  messagingSenderId: "542344385074",
  appId: "1:542344385074:web:c3befc8d9ba9f69393622b",
  measurementId: "G-V59EVVT5NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  // const analytics = getAnalytics();
  // logEvent(analytics, 'notification_received');
export default app;