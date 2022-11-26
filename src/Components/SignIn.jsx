import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import GoogleButton from "react-google-button"
import { auth } from '../Firebase';

const style = {
  wrapper: `flex justify-center`
}

//HANDLES SIGNIN
const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}


const SignIn = () => {
  return (
    <div className={style.wrapper} onClick={googleSignIn}>
      <GoogleButton />
    </div>
  )
}

export default SignIn