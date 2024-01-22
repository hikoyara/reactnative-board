import { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";
/* components */
import MemberIcon from "./MemberIcon";
/* utils */
import { WindowSize } from "../utils/WindowSize";
/* lib */
import { signout } from "../lib/auth";
/* context */
import { useAuthContext } from "../context/UserContext";
/* paper */
import { Drawer, Icon, Text, Divider, Button, Dialog } from "react-native-paper";
/* router */
import { router } from "expo-router";

export default function SideNavigation() {
    const { user } = useAuthContext();

    const [active, setActive] = useState("");

    function handlePress() {
        // hideDialog();
        // signout();
        Alert.alert("ログアウトします。", "よろしいですか？", [
            {
                text: "いいえ",
                onPress: () => {},
            },
            {
                text: "はい",
                onPress: () => {
                    signout();
                },
                style: "destructive",
            },
        ]);
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.header}>
                <MemberIcon number={user.icon} size={40} />
                <Text variant="titleLarge" style={styles.memberName}>
                    {user.name ? user.name : `組合員${user.memberId}`}
                </Text>
                <Text style={styles.memberId}>ID:{user.memberId}</Text>
            </View>
            <ScrollView style={styles.container}>
                <Drawer.Section title="ACCOUNT">
                    <Drawer.Item label="Profile" icon={() => <Icon source="account" size={24} />} active={active === "first"} onPress={() => router.push("/member/(drawer)/account/profile")} />
                    <Drawer.Item label="Second Item" icon={() => <Icon source="cancel" size={24} />} active={active === "second"} onPress={() => setActive("second")} />
                </Drawer.Section>
                <Drawer.Section title="SETTINGS">
                    <Drawer.Item label="Third Item" icon={() => <Icon source="cancel" size={24} />} active={active === "third"} onPress={() => setActive("third")} />
                    <Drawer.Item label="Fource Item" icon={() => <Icon source="cancel" size={24} />} active={active === "fource"} onPress={() => setActive("fource")} />
                </Drawer.Section>
            </ScrollView>
            <View style={styles.bottom}>
                <Divider />
                <Button icon="logout" onPress={handlePress} style={{ borderRadius: 0 }}>
                    ログアウト
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
    memberName: {
        marginTop: 8,
    },
    memberId: {
        color: "#707070",
    },
    dialog: {
        width: WindowSize().width - 48,
    },
});
