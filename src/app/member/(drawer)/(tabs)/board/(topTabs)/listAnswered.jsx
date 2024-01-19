import { View, Text, StyleSheet } from "react-native";

export default function ListAnswered() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>回答済み</Text>
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
