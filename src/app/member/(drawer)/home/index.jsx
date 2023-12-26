import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
export default function Page() {
    return (
        <>
            <View style={styles.container}>
                <Drawer.Screen
                    options={{
                        title: "Home",
                        headerShown: true,
                        headerLeft: () => <DrawerToggleButton />,
                        headerRight: () => (
                            <TouchableOpacity onPress={() => {}} style={styles.reloadButton}>
                                <Ionicons name="reload" size={24} color="black" />
                            </TouchableOpacity>
                        ),
                        headerRightContainerStyle: {
                            marginRight: 18,
                        },
                    }}
                />
                <Text style={{ fontSize: 24 }}>Index page of Home Drawer</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    reloadButton: {
        marginRight: 17,
    },
});
