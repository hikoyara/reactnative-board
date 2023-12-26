import { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
/* paper */
import { Drawer, Avatar, Icon } from "react-native-paper";

export default function SideNavigation() {
    const [active, setActive] = useState("");
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.header}>
                <Avatar.Icon size={40} icon="account" />
            </View>
            <ScrollView style={styles.container}>
                <Drawer.Section title="ACCOUNT">
                    <Drawer.Item label="Profile" icon={() => <Icon source="cancel" size={24} />} active={active === "first"} onPress={() => setActive("first")} />
                    <Drawer.Item label="Second Item" icon={() => <Icon source="cancel" size={24} />} active={active === "second"} onPress={() => setActive("second")} />
                </Drawer.Section>
                <Drawer.Section title="SETTINGS">
                    <Drawer.Item label="Third Item" icon={() => <Icon source="cancel" size={24} />} active={active === "third"} onPress={() => setActive("third")} />
                    <Drawer.Item label="Fource Item" icon={() => <Icon source="cancel" size={24} />} active={active === "fource"} onPress={() => setActive("fource")} />
                </Drawer.Section>
            </ScrollView>
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
});
