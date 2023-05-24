import {initializeApp} from 'firebase/app'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFunctions } from "firebase/functions"
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'


/*const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}*/

const firebaseConfig = {
    apiKey: "AIzaSyCNh78e5FjfuovnKUrOqa3BYnhnfpRKvlo",
    authDomain: "mimplatform.firebaseapp.com",
    databaseURL: "https://mimplatform-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mimplatform",
    storageBucket: "mimplatform.appspot.com",
    messagingSenderId: "328284959247",
    appId: "1:328284959247:web:158fb5a6693135c342a97a",
    measurementId: "G-B75B4Q78C3"
  };

const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)
export const functions = getFunctions(app)

export const db = getFirestore(app)

export const storage = getStorage(app)


export function onAuthStateChange(userCallback, claimsCallback, loadingCallback = null) {
    loadingCallback(true)
    return onAuthStateChanged(authentication, user => {
        if (user) {
            return authentication.currentUser.getIdTokenResult().then((idTokenResult) => {
                claimsCallback(idTokenResult.claims)
                userCallback({ loggedIn: true, ...user });
                loadingCallback(false)
            }).catch(error => {
                console.log(error)
                loadingCallback(false)
                return userCallback({ loggedIn: false });
            });
        } else {
            loadingCallback(false)
           return userCallback({ loggedIn: false });
      }
    });
}

