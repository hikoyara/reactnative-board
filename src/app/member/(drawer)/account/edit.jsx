import { StyleSheet, View, ScrollView } from "react-native";
/* components */
import MemberIcon from "../../../../components/MemberIcon";
/* context */
import { useAuthContext } from "../../../../context/UserContext";
/* paper */
import { Avatar, Button, Text, IconButton, TextInput } from "react-native-paper";
/* router */
import { router } from "expo-router";

export default function Edit() {
    const user = useAuthContext().user;

    return (
        <View style={styles.container} user={user}>
            <View style={styles.header}>
                <Button style={styles.cancel} textColor="#fff" labelStyle={{ fontWeight: "400" }} onPress={() => router.back()}>
                    キャンセル
                </Button>
                <Text variant="titleMedium" style={{ fontWeight: "600", color: "#fff" }}>
                    編集
                </Text>
                <Button style={styles.decide} textColor="#fff" labelStyle={{ fontWeight: "600" }} onPress={() => router.back()}>
                    決定
                </Button>
            </View>
            <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 120 }}>
                <View style={styles.iconWrapper}>
                    <View style={styles.iconInner}>
                        <MemberIcon number={user.icon} size={80} />
                        <IconButton
                            icon="sync"
                            mode="contained"
                            size={14}
                            onPress={() => {
                                console.log("aaa");
                            }}
                            style={styles.iconButton}
                            iconColor="#fff"
                            containerColor="rgba(0,0,0,0.2)"
                        />
                    </View>
                    <Text variant="bodySmall" style={styles.id}>
                        組合員ID：
                    </Text>
                </View>
                <View style={styles.form}>
                    <TextInput mode="flat" label="組合員名" selectionColor="#000" style={styles.formInput} />
                    <TextInput mode="flat" label="自己紹介" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput mode="flat" label="住所" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput mode="flat" label="電話番号" selectionColor="#000" style={styles.formInput} />
                    <TextInput mode="flat" label="営業日" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput mode="flat" label="営業時間" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput mode="flat" label="定休日" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput mode="flat" label="決済方法" selectionColor="#000" style={styles.formInput} multiline />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#1976d2",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
    cancel: {
        position: "absolute",
        bottom: 3,
        left: 5,
    },
    decide: {
        position: "absolute",
        bottom: 3,
        right: 5,
    },
    body: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: "#fff",
    },
    iconWrapper: {
        alignItems: "center",
    },
    iconButton: {
        position: "absolute",
        bottom: -6,
        right: -6,
    },
    id: {
        marginTop: 20,
        color: "#707070",
    },
    form: {
        marginTop: 40,
    },
    formInput: {
        marginBottom: 20,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
});
