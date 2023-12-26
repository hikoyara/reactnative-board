import { Drawer } from "expo-router/drawer";
import { Text } from "react-native-paper";

export default function MemberDrawer() {
    return <Drawer screenOptions={{ headerShown: false, swipeEdgeWidth: 100 }}></Drawer>;
}
