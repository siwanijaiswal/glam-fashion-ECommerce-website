import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGooglePopUp,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './authentication.scss'

const Authentication = () => {
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


  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        SignIn with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
