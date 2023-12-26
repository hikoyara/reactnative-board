import { View, Text, StyleSheet } from "react-native";
import Header from "../../../../../components/Header";

export default function profile() {
    return (
        <View style={styles.container}>
            <Header>Account</Header>
            <View style={styles.body}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        paddingTop: 100,
        paddingHorizontal: 20,
    },
});
