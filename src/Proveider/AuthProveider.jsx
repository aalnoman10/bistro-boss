import { createContext, useState } from "react";
import { app } from "../firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext()

const AuthProveider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (user, name, photo) => {
        setLoading(true)
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscrabe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscrabe()
        }
    }, [auth])

    const info = {
        user,
        setUser,
        loading,
        createUser,
        login,
        updateUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProveider;