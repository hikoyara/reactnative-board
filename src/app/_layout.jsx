import { Stack } from "expo-router";
/* context */
import { AuthProvider } from "../context/UserContext";
/* paper */
import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "tomato",
        secondary: "yellow",
    },
};

const Layout = () => {
    return (
        <AuthProvider>
            <PaperProvider theme={theme}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
            </PaperProvider>
        </AuthProvider>
    );
};

export default Layout;
