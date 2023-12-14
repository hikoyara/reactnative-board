import { Alert } from "react-native";
/* lib */
import { db, auth } from "../config";
/* router */
import { router } from "expo-router";
/* firestore */
import { doc, getDoc, deleteDoc, setDoc, Timestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signup = async (id, password) => {
    if (!id || !password) {
        Alert.alert("未入力の項目があります。");
        return;
    }
    const docRef = doc(db, "members", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await deleteDoc(docRef);
        await createUserWithEmailAndPassword(auth, `member${id}@test.com`, password).then((userCredential) => {
            console.log("member created!", userCredential.user.uid);
            setDoc(doc(db, "members", userCredential.user.uid), {
                id,
                state: "Authenticated",
                updatedAt: Timestamp.fromDate(new Date()),
            });
            router.replace("member/(tabs)/board/list");
        });
    } else {
        Alert.alert("仮登録が未完了のユーザーです");
    }
};

export const signin = async (id, password) => {
    if (!id || !password) {
        Alert.alert("未入力の項目があります。");
        return;
    }
    await signInWithEmailAndPassword(auth, `member${id}@test.com`, password)
        .then((userCredential) => {
            console.log("logged in!", userCredential.user.uid);
            router.replace("member/(tabs)/board/list");
        })
        .catch((error) => {
            Alert.alert("ユーザーが見つかりません。");
        });
};
