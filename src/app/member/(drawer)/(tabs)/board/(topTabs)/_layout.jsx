import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
/* screens */
import ListUnanswered from "./listUnanswered";
import ListAnswered from "./listAnswered";
/* components */
import Header from "../../../../../../components/Header";
/* paper */
import { Text } from "react-native-paper";
/* utils */
import { WindowSize } from "../../../../../../utils/WindowSize";

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
    return (
        <>
            <Header>回覧板</Header>
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: {
                        backgroundColor: "rgba(0,0,0,0)",
                    },
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name="未回答"
                    component={ListUnanswered}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <View style={[styles.tabBarLabel, focused && styles.tabBarLabelActive]}>
                                <Text style={{ fontSize: 14, color: focused ? "#2B2B2B" : "#8E8E8E", fontWeight: focused ? "600" : "300" }}>未回答</Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="回答済み"
                    component={ListAnswered}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <View style={[styles.tabBarLabel, focused && styles.tabBarLabelActive]}>
                                <Text style={{ fontSize: 14, color: focused ? "#2B2B2B" : "#8E8E8E", fontWeight: focused ? "600" : "300" }}>回答済み</Text>
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 56,
        backgroundColor: "#F3EDF6",
    },
    tabBarLabel: {
        width: WindowSize().width / 2,
        height: 46,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3EDF6",
        padding: 0,
    },
    tabBarLabelActive: {
        backgroundColor: "#fff",
    },
});
