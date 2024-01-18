import { StyleSheet, View, ScrollView } from "react-native";
/* components */
import Header from "../../../../components/Header";
import MemberIcon from "../../../../components/MemberIcon";
/* context */
import { useAuthContext } from "../../../../context/UserContext";
/* paper */
import { Button, Text, Chip } from "react-native-paper";
/* router */
import { router } from "expo-router";

export default function Profile() {
    const user = useAuthContext().user;

    return (
        <View style={styles.container} user={user}>
            <Header back>My page</Header>
            <ScrollView style={styles.body}>
                <View style={styles.profile}>
                    <View style={styles.profileHead}>
                        <View style={styles.profileHeadTop}>
                            <MemberIcon number={user.icon} size={80} />
                            <Button icon="pencil" mode="contained-tonal" onPress={() => router.push("/member/(drawer)/account/edit")}>
                                編集する
                            </Button>
                        </View>
                        <View style={styles.profileHeadContent}>
                            <Text variant="headlineSmall" style={styles.profileName}>
                                {user.name ? user.name : `組合員${user.id}`}
                            </Text>
                            {user.profile && (
                                <Text variant="bodyMedium" style={styles.profileText}>
                                    {user.profile}
                                </Text>
                            )}
                            <View style={styles.profileCategoryList}>
                                <Chip style={styles.profileCategoryItem}>飲食店</Chip>
                            </View>
                        </View>
                    </View>
                    <View style={styles.profileTable}>
                        <View style={styles.profileTableItem}>
                            <Text variant="bodyLarge">住所</Text>
                            <Text variant="bodyLarge">{user.address ? user.address : "未設定"}</Text>
                        </View>
                        <View style={styles.profileTableItem}>
                            <Text variant="bodyLarge">電話番号</Text>
                            <Text variant="bodyLarge">{user.address ? user.phoneNumber : "未設定"}</Text>
                        </View>
                        <View style={styles.profileTableItem}>
                            <Text variant="bodyLarge">営業日</Text>
                            <Text variant="bodyLarge">{user.address ? user.businessDay : "未設定"}</Text>
                        </View>
                        <View style={styles.profileTableItem}>
                            <Text variant="bodyLarge">営業時間</Text>
                            <Text variant="bodyLarge">{user.address ? user.businessTime : "未設定"}</Text>
                        </View>
                        <View style={styles.profileTableItem}>
                            <Text variant="bodyLarge">定休日</Text>
                            <Text variant="bodyLarge">{user.address ? user.holiday : "未設定"}</Text>
                        </View>
                        <View style={styles.profileTableItem}>
                            <Text variant="bodyLarge">決済方法</Text>
                            <Text variant="bodyLarge">{user.address ? user.pay : "未設定"}</Text>
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
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    profileHead: {
        marginBottom: 40,
    },
    profileHeadTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    // profileName: {
    //     marginBottom: 20,
    // },
    profileText: {
        marginTop: 20,
    },
    profileCategoryList: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 10,
    },
    profileCategoryItem: {
        marginTop: 10,
        marginRight: 10,
    },
    profileTable: {
        borderTopWidth: 1,
        borderTopColor: "#dbdbdb",
    },
    profileTableItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#dbdbdb",
    },
});
