import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD3Yb8jr-_yDvIcg_TXs_chqdrRd9RghRI",
    authDomain: "travel-app-a030e.firebaseapp.com",
    projectId: "travel-app-a030e",
    storageBucket: "travel-app-a030e.appspot.com",
    messagingSenderId: "498035132186",
    appId: "1:498035132186:web:477dc0a6f6b9af45350ea3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
