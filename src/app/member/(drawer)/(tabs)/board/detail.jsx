import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
/* components */
import Header from "../../../../../components/Header";
/* paper */
import { Text, Icon, RadioButton, Button, Modal } from "react-native-paper";

export default function Detail() {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return (
        <View style={styles.container}>
            <Header back>回覧板詳細</Header>
            <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 120 }}>
                <View style={styles.head}>
                    <Text variant="titleLarge">3月31日にお花見を開催します！</Text>
                    <View style={styles.row}>
                        <Icon source="email" size={16} color="#707070" />
                        <Text variant="bodyMedium" style={styles.info}>
                            配信日
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Icon source="clock" size={16} color="#707070" />
                        <Text variant="bodyMedium" style={styles.info}>
                            締切日
                        </Text>
                    </View>
                </View>
                <Text variant="bodyMedium">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>

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
