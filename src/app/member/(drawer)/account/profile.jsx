import { StyleSheet, View, ScrollView } from "react-native";
/* components */
import Header from "../../../../components/Header";
import MemberIcon from "../../../../components/MemberIcon";
/* utils */
import { WindowSize } from "../../../../utils/WindowSize";
/* context */
import { useAuthContext } from "../../../../context/UserContext";
/* paper */
import { Button, Text, Chip, Divider } from "react-native-paper";
/* router */
import { router } from "expo-router";

export default function Profile() {
    const { user } = useAuthContext();

    return (
        <View style={styles.container} user={user}>
            <Header back>My page</Header>
            <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 120 }}>
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
                                {user.name ? user.name : `組合員${user.memberId}`}
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
                            <View style={styles.profileTableItemLeft}>
                                <Text variant="bodyMedium">住所</Text>
                            </View>
                            <View style={styles.profileTableItemRight}>
                                <Text variant="bodyMedium">{user.address ? user.address : "未設定"}</Text>
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.profileTableItem}>
                            <View style={styles.profileTableItemLeft}>
                                <Text variant="bodyMedium">電話番号</Text>
                            </View>
                            <View style={styles.profileTableItemRight}>
                                <Text variant="bodyMedium">{user.phoneNumber ? user.phoneNumber : "未設定"}</Text>
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.profileTableItem}>
                            <View style={styles.profileTableItemLeft}>
                                <Text variant="bodyMedium">営業日</Text>
                            </View>
                            <View style={styles.profileTableItemRight}>
                                <Text variant="bodyMedium">{user.businessDay ? user.businessDay : "未設定"}</Text>
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.profileTableItem}>
                            <View style={styles.profileTableItemLeft}>
                                <Text variant="bodyMedium">営業時間</Text>
                            </View>
                            <View style={styles.profileTableItemRight}>
                                <Text variant="bodyMedium">{user.businessTime ? user.businessTime : "未設定"}</Text>
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.profileTableItem}>
                            <View style={styles.profileTableItemLeft}>
                                <Text variant="bodyMedium">定休日</Text>
                            </View>
                            <View style={styles.profileTableItemRight}>
                                <Text variant="bodyMedium">{user.holiday ? user.holiday : "未設定"}</Text>
                            </View>
                        </View>
                        <Divider />
                        <View style={[styles.profileTableItem, { borderBottomWidth: 0 }]}>
                            <View style={styles.profileTableItemLeft}>
                                <Text variant="bodyMedium">決済方法</Text>
                            </View>
                            <View style={styles.profileTableItemRight}>
                                <Text variant="bodyMedium">{user.pay ? user.pay : "未設定"}</Text>
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
        backgroundColor: "#F7F3F9",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        elevation: 4,
    },
    profileTableItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    profileTableItemLeft: {
        width: 80,
    },
    profileTableItemRight: {
        width: WindowSize().width - 40 - 100,
        alignItems: "flex-end",
    },
});
