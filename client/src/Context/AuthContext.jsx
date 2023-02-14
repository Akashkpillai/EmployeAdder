import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from "../firebase";

const userAuhtContext = createContext();

export function UserAuhtContextProvider({children}) {

    const [currentUser,setCurrentUser] = useState();

    function singUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout(){
        return signOut(auth);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(User)=>{
            setCurrentUser(User)
        })
        return(()=>{
            unsubscribe();
        })
    },[])

    const values = {
        singUp,
        logIn,
        currentUser,
        logout

    }

    return <userAuhtContext.Provider value={values}>
        {children}
    </userAuhtContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuhtContext)
}