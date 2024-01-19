import { View, Text, StyleSheet } from "react-native";

export default function ListUnanswered() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>未回答</Text>
            </View>
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
});
