/* router */
import { useNavigation } from "expo-router";
/* paper */
import { Appbar } from "react-native-paper";

const Header = (props) => {
    const { children, back } = props;
    const navigation = useNavigation();

    return (
        <Appbar.Header style={{ backgroundColor: "#1976d2" }}>
            {back ? (
                <Appbar.BackAction
                    onPress={() => {
                        navigation.goBack();
                    }}
                    color="#fff"
                />
            ) : (
                <Appbar.Action
                    icon="account-circle"
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                    color="#fff"
                />
            )}
            <Appbar.Content title={children} color="#fff" />
        </Appbar.Header>
    );
};

export default Header;
