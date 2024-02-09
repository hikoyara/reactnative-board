import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
/* components */
import Header from "../../../../../components/Header";
/* lib */
import { dateToStringFull } from "../../../../../lib/date";
import { boardSubmit } from "../../../../../lib/board";
/* paper */
import { Text, Icon, RadioButton, Button, Modal } from "react-native-paper";
/* router */
import { useLocalSearchParams } from "expo-router";
/* firebase */
import { auth, db } from "../../../../../config";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";

export default function Detail() {
    const { id } = useLocalSearchParams();

    const [board, setBoard] = useState({
        title: "",
        text: "",
        answered: [],
        notAnswered: [],
        participating: [],
        notParticipating: [],
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
                    answered: data.answered,
                    notAnswered: data.notAnswered,
                    participating: data.participating,
                    notParticipating: data.notParticipating,
                    undecided: data.undecided,
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
                <Text variant="bodyMedium" style={styles.text}>
                    {board.text}
                </Text>

                <Text variant="bodyMedium">あなたの回答：未回答</Text>
                <Button icon="clipboard-edit" mode="contained" buttonColor="#1976d2" contentStyle={{ flexDirection: "row-reverse" }} style={styles.answerButton} onPress={showModal}>
                    回答する
                </Button>
            </ScrollView>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                <View style={styles.radioWrapper}>
                    <RadioButton.Group onValueChange={(value) => setValue(value)} value={value}>
                        <RadioButton.Item label="参加" value="participating" color="#1976d2" mode="android" />
                        <RadioButton.Item label="不参加" value="notParticipating" color="#1976d2" mode="android" />
                        <RadioButton.Item label="未定" value="undecided" color="#1976d2" mode="android" />
                    </RadioButton.Group>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button textColor="#1976D2" onPress={hideModal}>
                        Cancel
                    </Button>
                    <Button icon="send" mode="contained" buttonColor="#1976d2" contentStyle={{ flexDirection: "row-reverse" }} style={styles.submitButton} onPress={() => boardSubmit(id, board, value)}>
                        Submit
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
        marginBottom: 40,
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
    buttonWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
});
