import { Text, StyleSheet, View } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import Header from "../../../../components/Header";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Header back>account</Header>
            <View style={styles.body}>
                <Text style={{ fontSize: 24 }}>Index page of Settings Drawer</Text>
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
