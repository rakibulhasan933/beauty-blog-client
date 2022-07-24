import { useEffect, useState } from "react"
import InitializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken, signOut } from "firebase/auth";

InitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const singInUsingInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     // console.log(result.user);
        //     setUser(result.user)
        // })

    }
    // LOGOUT
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };

    return {
        user,
        logout,
        setUser,
        singInUsingInGoogle
    }

}
export default useFirebase;