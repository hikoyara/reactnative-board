import { Slot } from "expo-router";
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
            <Slot />
        </PaperProvider>
    );
};

export default Layout;
