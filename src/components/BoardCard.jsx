import { View, StyleSheet } from "react-native";
/* paper */
import { Card, Text, Icon } from "react-native-paper";
/* lib */
import { dateToStringFull } from "../lib/date";
/* router */
import { router } from "expo-router";

export default function BoardCard(props) {
    const { item } = props;

    function handlePress(id) {
        router.push({
            pathname: "/member/(drawer)/(tabs)/board/detail",
            params: { id },
        });
    }

    return (
        <Card onPress={() => handlePress(item.id)} style={styles.card}>
            <Card.Content>
                <Text variant="titleLarge" style={styles.cardTitle}>
                    {item.title}
                </Text>
                <Text variant="bodyMedium" style={styles.cardText}>
                    {item.text}
                </Text>
                <View style={styles.row}>
                    <Icon source="email" size={16} color="#707070" />
                    <Text variant="bodyMedium" style={styles.info}>
                        配信日：{dateToStringFull(item.createdAt)}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Icon source="clock" size={16} color="#707070" />
                    <Text variant="bodyMedium" style={styles.info}>
                        締切日：{dateToStringFull(item.deadlinedAt)}
                    </Text>
                </View>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
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
    cardTitle: {
        marginBottom: 10,
    },
    cardText: {
        marginBottom: 10,
    },
});
