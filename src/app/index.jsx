import { useEffect } from "react";
/* router */
import { Redirect, router } from "expo-router";
/* firebase */
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";

const Index = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                // router.replace("/member/(tabs)/board/list");
                router.replace("/member/(drawer)/(tabs)");
            }
        });
    }, []);

    return <Redirect href="member/auth/sign_up" />;
};

export default Index;
