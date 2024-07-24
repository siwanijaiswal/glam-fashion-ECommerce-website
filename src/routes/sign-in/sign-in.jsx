import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
  //googleRedirect didnot worked

  // useEffect(() => {
  //   const getResponse = async () => {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       console.log(response);
  
  //       if (response) {
  //         await createUserDocumentFromAuth(response.user);
  //       }
  //     } catch (error) {
  //       console.error("Error getting redirect result:", error);
  //     }
  //   };
  //   getResponse();
  // }, []);

  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopUp();
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>SignIn with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        SignIn with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
