import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
/* components */
import MemberIcon from "../../../../components/MemberIcon";
/* context */
import { useAuthContext } from "../../../../context/UserContext";
/* paper */
import { Button, Text, IconButton, TextInput } from "react-native-paper";
/* router */
import { router } from "expo-router";
/* firestore */
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../../../config";

export default function Edit() {
    const { user, setUser } = useAuthContext();

    const [icon, setIcon] = useState(user.icon);
    const [name, setName] = useState(user.name);
    const [profile, setProfile] = useState(user.profile);
    const [address, setAddress] = useState(user.address);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [businessDay, setBusinessDay] = useState(user.businessDay);
    const [businessTime, setBusinessTime] = useState(user.businessTime);
    const [holiday, setHoliday] = useState(user.holiday);
    const [pay, setPay] = useState(user.pay);

    const onSave = () => {
        if (auth.currentUser === null) {
            return;
        }
        const docRef = doc(db, "members", user.docId);
        updateDoc(docRef, {
            ...user,
            icon,
            name,
            profile: profile?.replace(/\n/g, "\\n"),
            address: address?.replace(/\n/g, "\\n"),
            phoneNumber,
            businessDay: businessDay?.replace(/\n/g, "\\n"),
            businessTime: businessTime?.replace(/\n/g, "\\n"),
            holiday: holiday?.replace(/\n/g, "\\n"),
            pay: pay?.replace(/\n/g, "\\n"),
            updatedAt: Timestamp.fromDate(new Date()),
        })
            .then(() => {
                setUser({
                    ...user,
                    icon,
                    name,
                    profile,
                    address,
                    phoneNumber,
                    businessDay,
                    businessTime,
                    holiday,
                    pay,
                });
                router.back();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <View style={styles.container} user={user}>
            <View style={styles.header}>
                <Button style={styles.cancel} textColor="#fff" labelStyle={{ fontWeight: "400" }} onPress={() => router.back()}>
                    キャンセル
                </Button>
                <Text variant="titleMedium" style={{ fontWeight: "600", color: "#fff" }}>
                    編集
                </Text>
                <Button style={styles.decide} textColor="#fff" labelStyle={{ fontWeight: "600" }} onPress={onSave}>
                    保存
                </Button>
            </View>
            <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 120 }}>
                <View style={styles.iconWrapper}>
                    <View style={styles.iconInner}>
                        <MemberIcon number={icon} size={80} />
                        <IconButton
                            icon="sync"
                            mode="contained"
                            size={14}
                            onPress={() => {
                                setIcon(icon >= 8 ? 1 : icon + 1);
                            }}
                            style={styles.iconButton}
                            iconColor="#fff"
                            containerColor="rgba(0,0,0,0.2)"
                        />
                    </View>
                    <Text variant="bodySmall" style={styles.id}>
                        組合員ID：{user.memberId}
                    </Text>
                </View>
                <View style={styles.form}>
                    <TextInput value={name} onChangeText={(text) => setName(text)} mode="flat" label="組合員名" selectionColor="#000" style={styles.formInput} />
                    <TextInput value={profile} onChangeText={(text) => setProfile(text)} mode="flat" label="自己紹介" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput value={address} onChangeText={(text) => setAddress(text)} mode="flat" label="住所" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)} mode="flat" label="電話番号" selectionColor="#000" style={styles.formInput} />
                    <TextInput value={businessDay} onChangeText={(text) => setBusinessDay(text)} mode="flat" label="営業日" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput value={businessTime} onChangeText={(text) => setBusinessTime(text)} mode="flat" label="営業時間" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput value={holiday} onChangeText={(text) => setHoliday(text)} mode="flat" label="定休日" selectionColor="#000" style={styles.formInput} multiline />
                    <TextInput value={pay} onChangeText={(text) => setPay(text)} mode="flat" label="決済方法" selectionColor="#000" style={styles.formInput} multiline />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#1976d2",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
    cancel: {
        position: "absolute",
        bottom: 3,
        left: 5,
    },
    decide: {
        position: "absolute",
        bottom: 3,
        right: 5,
    },
    body: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: "#fff",
    },
    iconWrapper: {
        alignItems: "center",
    },
    iconButton: {
        position: "absolute",
        bottom: -6,
        right: -6,
    },
    id: {
        marginTop: 20,
        color: "#707070",
    },
    form: {
        marginTop: 40,
    },
    formInput: {
        marginBottom: 20,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
});
