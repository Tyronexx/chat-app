import React from 'react';
import { auth } from '../Firebase';

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}


const LogOut = () => {

    //THIS IS USED TO SIGNOUT
    const signOut = () => {
        signOut(auth)
    }

    return (
        <button className={style.button} onClick={() => auth.signOut()}>
            LogOut
        </button>
    )
}

export default LogOut