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
                    const data = docSnap.data();
                    setUser({
                        docId: docSnap.id,
                        memberId: data.memberId,
                        state: data.state,
                        icon: data.icon,
                        name: data.name,
                        profile: data.profile,
                        address: data.address,
                        phoneNumber: data.phoneNumber,
                        businessDay: data.businessDay,
                        businessTime: data.businessTime,
                        holiday: data.holiday,
                        pay: data.pay,
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
