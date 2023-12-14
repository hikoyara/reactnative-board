import { View, Text, StyleSheet } from "react-native";
import Header from "../../../../components/Header";

export default function list() {
    return (
        <View style={styles.container}>
            <Header>boards</Header>
            <View style={styles.body}>
                <Text>ああああああ</Text>
            </View>
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
