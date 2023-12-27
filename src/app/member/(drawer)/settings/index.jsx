import { Text, StyleSheet, View } from "react-native";
/* router */
import { Drawer } from "expo-router/drawer";

export default function Page() {
    return (
        <View style={styles.container}>
            <Drawer.Screen
                options={{
                    title: "Settings",
                    headerShown: false,
                }}
            />
            <Text style={{ fontSize: 24 }}>Index page of Settings Drawer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
