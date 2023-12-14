import { useState } from "react";
/* router */
import { Tabs } from "expo-router";
/* react-navigation */
import { CommonActions } from "@react-navigation/native";
/* paper */
import { BottomNavigation, Text, Icon } from "react-native-paper";

export default function MemberBottomTabs() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.title;

                        return label;
                    }}
                />
            )}
        >
            <Tabs.Screen
                name="board"
                options={{
                    tabBarLabel: "board",
                    title: "board",
                    tabBarIcon: ({ color, size }) => <Icon source="clipboard-check" color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    tabBarLabel: "Account",
                    title: "Account",
                    tabBarIcon: ({ color, size }) => <Icon source="account" color={color} size={size} />,
                }}
            />
        </Tabs>
    );
}
