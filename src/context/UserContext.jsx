import { createContext, useState, useEffect, useContext } from "react";
/* firebase */
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config";
/* firestore */
import { doc, getDoc, deleteDoc, setDoc, Timestamp } from "firebase/firestore";

const AuthContext = createContext([0, () => {}]);

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState("");

    const value = {
        user,
        setUser,
    };

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "members", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const data = docSnap.data();
                    setUser({
                        id: data.id,
                    });
                }
            } else {
                console.log("現在ログインしていません");
            }
        });
    }, []);

    if (user === null) {
        () => {};
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
