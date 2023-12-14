import { Stack } from "expo-router";
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
        <PaperProvider theme={theme}>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </PaperProvider>
    );
};

export default Layout;
