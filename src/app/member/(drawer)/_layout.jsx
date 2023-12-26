import { Drawer } from "expo-router/drawer";

export default function MemberDrawer() {
    return <Drawer screenOptions={{ headerShown: false, swipeEdgeWidth: 100 }}></Drawer>;
}
