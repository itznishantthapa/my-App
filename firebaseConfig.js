// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';  // getApps checks if Firebase is already initialized
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'; // Firebase Authentication with persistence
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage for storing auth state in React Native
import { getFirestore } from 'firebase/firestore';  // Firestore for database functionality
import { getStorage } from 'firebase/storage';  // Firebase Storage for handling file uploads/downloads



// Firebase configuration object containing project-specific details
const firebaseConfig = {
    apiKey: "AIzaSyC1XKt8PvlSgdUA1ZjO4TT7wLG-_1mp_b8",
    authDomain: "my-app-1042e.firebaseapp.com",
    projectId: "my-app-1042e",
    storageBucket: "my-app-1042e.appspot.com",
    messagingSenderId: "637746141347",
    appId: "1:637746141347:android:ef1e0c5f446e69a51b8716"
};

// Initialize Firebase app only if it's not already initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the already initialized app
}

// Initialize Firebase Auth with persistent storage using AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore (Cloud Firestore database)
const firestore = getFirestore(app);

// Initialize Firebase Storage for file handling (uploads/downloads)
const storage = getStorage(app);

// Export the initialized instances to use across the app
export { auth, firestore, storage };
export default app;