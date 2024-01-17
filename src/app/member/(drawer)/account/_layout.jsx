import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
    return (
        <>
            <Drawer.Screen
                options={{
                    title: "Account",
                    headerShown: false,
                }}
            />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="edit"
                    options={{
                        presentation: "modal",
                        gestureDirection: "vertical",
                    }}
                />
            </Stack>
        </>
    );
}
