import { Alert } from "react-native";
/* lib */
import { db, auth } from "../config";
/* firestore */
import { collection, query, where, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signup = async (id, password) => {
    if (!id || !password) {
        Alert.alert("未入力の項目があります。");
        return;
    }
    const q = query(collection(db, "members"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        Alert.alert("組合員ユーザーが見つかりません。");
    } else {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.password !== password) {
                Alert.alert("パスワードが違います。");
            } else {
                createUserWithEmailAndPassword(auth, `member${id}@test.com`, password);
            }
        });
    }
};
