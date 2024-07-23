import React from 'react';
import { signInWithGooglePopUp,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const logGoogleUser = async()=>{
        // const response = await signInWithGooglePopUp();
        const {user} = await signInWithGooglePopUp();
        const userDocRef =  await createUserDocumentFromAuth(user);
       
        // console.log(response);
    }
  return (
    <div>
        <h1>sign in page</h1>
      <button onClick={logGoogleUser}>SignIn with Google Popup</button>
    </div>
  )
}

export default SignIn;