import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
/* components */
import Header from "../../../../../components/Header";
/* lib */
import { dateToStringFull } from "../../../../../lib/date";
/* paper */
import { Text, Icon, RadioButton, Button, Modal } from "react-native-paper";
/* router */
import { useLocalSearchParams } from "expo-router";
/* firebase */
import { auth, db } from "../../../../../config";
import { onSnapshot, doc } from "firebase/firestore";

export default function Detail() {
    const { id } = useLocalSearchParams();

    const [board, setBoard] = useState({
        title: "",
        text: "",
        deadlinedAt: null,
        createdAt: null,
        updatedAt: null,
    });

    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    useEffect(() => {
        if (auth.currentUser === null) {
            return;
        }
        const ref = doc(db, "boards", id);
        const unsub = onSnapshot(ref, (doc) => {
            const data = doc.data();
            if (data) {
                setBoard({
                    title: data.title,
                    text: data.text,
                    deadlinedAt: data.deadlinedAt.toDate(),
                    createdAt: data.createdAt.toDate(),
                    updatedAt: data.updatedAt.toDate(),
                });
            }
        });
        return unsub;
    }, []);

    return (
        <View style={styles.container}>
            <Header back>回覧板詳細</Header>
            <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 120 }}>
                <View style={styles.head}>
                    <Text variant="titleLarge">{board.title}</Text>
                    <View style={styles.row}>
                        <Icon source="email" size={16} color="#707070" />
                        <Text variant="bodyMedium" style={styles.info}>
                            配信日：{dateToStringFull(board.createdAt)}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Icon source="clock" size={16} color="#707070" />
                        <Text variant="bodyMedium" style={styles.info}>
                            締切日：{dateToStringFull(board.deadlinedAt)}
                        </Text>
                    </View>
                </View>
                <Text variant="bodyMedium">{board.text}</Text>

                <Button icon="clipboard-edit" mode="contained" buttonColor="#1976d2" contentStyle={{ flexDirection: "row-reverse" }} style={styles.answerButton} onPress={showModal}>
                    回答する
                </Button>
            </ScrollView>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                <View style={styles.radioWrapper}>
                    <RadioButton.Group onValueChange={(value) => setValue(value)} value={value}>
                        <RadioButton.Item label="未定" value="first" color="#1976d2" mode="android" />
                        <RadioButton.Item label="参加" value="second" color="#1976d2" mode="android" />
                        <RadioButton.Item label="不参加" value="third" color="#1976d2" mode="android" />
                    </RadioButton.Group>
                </View>
                <View style={styles.submitButtonWrapper}>
                    <Button icon="send" mode="contained" buttonColor="#1976d2" contentStyle={{ flexDirection: "row-reverse" }} style={styles.submitButton} onPress={hideModal}>
                        送信
                    </Button>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    info: {
        marginLeft: 4,
        color: "#707070",
    },
    head: {
        marginBottom: 20,
    },
    modal: {
        backgroundColor: "white",
        padding: 20,
        marginHorizontal: 20,
    },
    radioWrapper: {
        marginBottom: 20,
    },
    answerButton: {
        marginTop: 40,
    },
    submitButtonWrapper: {
        alignItems: "flex-end",
    },
});
