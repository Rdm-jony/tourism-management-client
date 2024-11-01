import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (user) => {
        setLoading(true)
        return updateProfile(auth.currentUser, user)
    }



    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unSubscribe();
        }
    }, [])

    useEffect(() => {
        const themeData = localStorage.getItem('theme')
        if (themeData) {
            setTheme(themeData)
            document.documentElement.setAttribute('data-theme', theme);

        } else {
            localStorage.setItem('theme', 'light')
            document.documentElement.setAttribute('data-theme', theme);

        }
    }, [theme])

    const authInfo = { user, createUser, signInUser, updateUser, logOut, loading, signInGoogle, setTheme, theme }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;