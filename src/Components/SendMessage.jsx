import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../Firebase';

const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
};

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');

    //THIS ADDS MESSAGES TO THE DATABASE    
    const sendMessage = async (e) => {
        e.preventDefault()
        //We add an if check to see if theres a text typed out if not dont send
        if (input === ''){
            alert('Please enter a valid message')
            return  //so that it exits the code
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')    //Will set input area back to empty fiels
        scroll.current.scrollIntoView({behaviour: 'smooth'})   //This makes our messages area scroll to the bottom i.e scroll to latest message
    }

    return (
        <form onSubmit={sendMessage} className={style.form}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}   //THIS WILL SET THE STATE TO THE VALUE OF WHAT EVER WE INPUT
                className={style.input}
                type="text"
                placeholder='Message' />
            <button className={style.button} type="submit">Send</button>
        </form>
    )
}

export default SendMessage