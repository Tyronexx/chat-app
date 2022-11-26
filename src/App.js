import React from "react";
import Navbar from "./Components/Navbar";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import Chat from "./Components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-200 mt-10 shadow-xl border relative`,
}


function App() {

  //THIS CONTROLS AUTHENTICATION
  const [user] = useAuthState(auth);
  console.log(user)

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar/>
        {user ? <Chat/> : null}             {/*THIS WILL DISPLAY THE CHATCOMPONENT ONLY IF THERES A SIGNED IN USER*/}
      </section>
    </div>
  );
}

export default App;
