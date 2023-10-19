import { View, Text, StyleSheet } from "react-native";
import Header from "../../../components/Header";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>メールアドレス</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        paddingTop: 100,
        paddingHorizontal: 20,
    },
});

export default SignUp;
