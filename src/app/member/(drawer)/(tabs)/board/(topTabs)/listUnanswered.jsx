import { View, StyleSheet, FlatList } from "react-native";
/* paper */
import { Card, Text, Icon, TextInput, Button } from "react-native-paper";

const items = [
    {
        id: 1,
        title: "テスト１",
        text: "テストです。",
    },
    {
        id: 2,
        title: "テスト２",
        text: "テストです。",
    },
    {
        id: 3,
        title: "テスト３",
        text: "テストです。",
    },
];

export default function ListUnanswered() {
    const header = () => (
        <View style={styles.header}>
            <TextInput mode="outlined" label="Search" right={<TextInput.Icon icon="search-web" />} />

            <View style={styles.sort}>
                <Button onPress={() => {}} icon="sort-variant" mode="contained" textColor="#707070" buttonColor="#F7F3F9">
                    並び替え
                </Button>
                <Text>配信日が新しい順</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={header}
                data={items}
                renderItem={({ item }) => (
                    <Card onPress={() => console.log("aaa")} style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">{item.title}</Text>
                            <Text variant="bodyMedium">{item.text}</Text>
                            <View style={styles.row}>
                                <Icon source="email" size={16} color="#707070" />
                                <Text variant="bodyMedium" style={styles.info}>
                                    配信日
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Icon source="clock" size={16} color="#707070" />
                                <Text variant="bodyMedium" style={styles.info}>
                                    締切日
                                </Text>
                            </View>
                        </Card.Content>
                    </Card>
                )}
                style={styles.body}
                contentContainerStyle={{ paddingBottom: 80 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 40,
    },
    sort: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },
    body: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    card: {
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    info: {
        marginLeft: 4,
        color: "#707070",
    },
});
