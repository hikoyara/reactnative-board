import { StyleSheet, View, ScrollView } from "react-native";
/* components */
import Header from "../../../../components/Header";
/* paper */
import { Avatar, Button, Text } from "react-native-paper";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Header back>My page</Header>
            <ScrollView style={styles.body}>
                <View style={styles.profile}>
                    <View style={styles.profileHead}>
                        <Avatar.Icon size={80} icon="account" />
                        <Button icon="pencil" mode="contained-tonal" onPress={() => console.log("Pressed")}>
                            編集する
                        </Button>
                    </View>
                    <View style={styles.profileBody}>
                        <Text variant="headlineSmall" style={styles.profileName}>
                            テスト組合員
                        </Text>
                        <Text variant="bodyMedium">これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。</Text>
                        <View style={styles.profileCategoryList}>
                            <View style={[styles.profileCategoryItem]}>
                                <Text variant="labelMedium">飲食店</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    profileHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    profileName: {
        marginBottom: 20,
    },
    profileCategoryList: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 10,
    },
    profileCategoryItem: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#E6DEF6",
        marginTop: 10,
        marginRight: 10,
    },
});
