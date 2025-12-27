import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_VoQxOAXhBWFNi3f3E7R7gxez3zJy-OY",
  authDomain: "nexus-app-f4a19.firebaseapp.com",
  projectId: "nexus-app-f4a19",
  storageBucket: "nexus-app-f4a19.firebasestorage.app",
  messagingSenderId: "338066138692",
  appId: "1:338066138692:web:56c87aee51cf561eb6fe11",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
