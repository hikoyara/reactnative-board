import { StyleSheet, View, ScrollView } from "react-native";
/* context */
import { useAuthContext } from "../../../../context/UserContext";
/* paper */
import { Avatar, Button, Text } from "react-native-paper";
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
                <Button style={styles.cancel} textColor="#fff" labelStyle={{ fontWeight: "600" }} onPress={() => router.back()}>
                    決定
                </Button>
            </View>
            <ScrollView style={styles.body}>
                <Avatar.Icon size={80} icon="account" />
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    body: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    iconWrapper: {
        backgroundColor: "#000",
    },
});
