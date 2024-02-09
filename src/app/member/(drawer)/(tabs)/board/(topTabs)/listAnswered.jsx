import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
/* paper */
import { Text, TextInput, Button } from "react-native-paper";
/* components */
import BoardCard from "../../../../../../components/BoardCard";
/* firebase */
import { auth, db } from "../../../../../../config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function ListAnswered() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        if (auth.currentUser === null) {
            return;
        }
        const ref = collection(db, "boards");
        const q = query(ref, where("answered", "array-contains", auth.currentUser.uid));
        const unsub = onSnapshot(q, (snapshot) => {
            const remoteBoards = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                remoteBoards.push({
                    id: doc.id,
                    title: data.title,
                    text: data.text,
                    deadlinedAt: data.deadlinedAt.toDate(),
                    createdAt: data.createdAt.toDate(),
                    updatedAt: data.updatedAt.toDate(),
                });
            });
            setBoards(remoteBoards);
        });
        return unsub;
    }, []);

    if (boards.length === 0) {
        return (
            <View style={styles.container}>
                <View style={emptyStyles.body}>
                    <Text variant="bodyLarge" style={emptyStyles.text}>
                        表示する回覧板がありません
                    </Text>
                </View>
            </View>
        );
    }

    const header = () => (
        <View style={styles.header}>
            {/* <TextInput mode="outlined" label="Search" right={<TextInput.Icon icon="search-web" />} /> */}

            <View style={styles.sort}>
                <Button onPress={() => {}} icon="sort-variant" mode="contained" textColor="#707070" buttonColor="#F7F3F9">
                    並び替え
                </Button>
                <Text>配信日が新しい順</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList ListHeaderComponent={header} data={boards} renderItem={({ item }) => <BoardCard item={item} />} style={styles.body} contentContainerStyle={{ paddingBottom: 80 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 40,
    },
    sort: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },
    body: {
        flex: 1,
        paddingTop: 0,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
});
const emptyStyles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 0,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 100,
    },
    text: {
        color: "#707070",
    },
});
