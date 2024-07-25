import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

//doc is used to get document instance, getDoc is used to get data of documents and set doc is used to set data in documents

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKmRBqJrQB-AQIRQqOA3Jsc7so9rn7M3w",
  authDomain: "glam-fashion-db.firebaseapp.com",
  projectId: "glam-fashion-db",
  storageBucket: "glam-fashion-db.appspot.com",
  messagingSenderId: "132170515990",
  appId: "1:132170515990:web:54fca2b50c3b5d14625737",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () =>signInWithRedirect(auth, googleProvider);

//see its uses in signin file

//take database from firebase
export const db =  getFirestore();

//this function tells that give me document from db of users collections haivng this uid.. from userdocref
//passing props as userAuth which is actually user in signin file.
export const createUserDocumentFromAuth=async(userAuth,additionalInformation)=>{

    if(!userAuth) return;
  const userDocRef = doc(db,'users',userAuth.uid);

//this userSnapshot will help to check if their exists document or not.
const userSnapShot = await getDoc(userDocRef);
//it checks whether instance of any collection or documents or user data exist in database or not.
// console.log(userSnapShot.exists());

//if user data does not exists, creates/set the document with data from userAuth in my collection
if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });

    }catch(error){
        console.log("error creating the user", error.message);
    }
}

//if userdata exists then return userDocRef
return userDocRef;
};

export const createAuthUserWithEmailAndPassword =async(email, password)=>{

    if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth,email,password)
};

export const signInAuthUserWithEmailAndPassword =async(email, password)=>{

    if(!email || !password) return;

   return await signInWithEmailAndPassword(auth,email,password);
};