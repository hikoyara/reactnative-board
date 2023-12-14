import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
/* paper */
import { Icon, TextInput, Button } from "react-native-paper";
/* router */
import { Link } from "expo-router";

export default function signIn() {
    const [membersId, setMembersId] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.iconWrapper}>
                    <Icon source="lock-outline" size={24} color="#fff" />
                </View>
                <Text style={styles.headText}>Sign in</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    mode="outlined"
                    label="Members ID"
                    value={membersId}
                    onChangeText={(text) => setMembersId(text)}
                    style={styles.formInput}
                    selectionColor="#000"
                    outlineColor="#acacac"
                    activeOutlineColor="#3100ff"
                    outlineStyle={{
                        borderWidth: 1,
                    }}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={{ marginBottom: 30 }}
                    selectionColor="#000"
                    outlineColor="#acacac"
                    activeOutlineColor="#3100ff"
                    outlineStyle={{
                        borderWidth: 1,
                    }}
                />
                <Button
                    loading={loading}
                    mode="contained"
                    buttonColor="#1976d2"
                    style={styles.button}
                    onPress={() => {
                        setLoading(!loading);
                    }}
                >
                    SIGN IN
                </Button>
                <View style={styles.link}>
                    <Link href="/member/auth/sign_up" asChild>
                        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 20,
    },
    head: {
        alignItems: "center",
        marginBottom: 30,
    },
    iconWrapper: {
        backgroundColor: "#9c27b0",
        padding: 8,
        borderRadius: 20,
        marginBottom: 10,
    },
    headText: {
        fontSize: 20,
    },
    formInput: {
        marginBottom: 20,
    },
    button: {
        borderRadius: 6,
        marginBottom: 15,
    },
    link: {
        alignItems: "flex-end",
    },
    linkText: {
        color: "#1976d2",
    },
});
