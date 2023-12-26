/* paper */
import { Appbar } from "react-native-paper";

const Header = (props) => {
    const { children, back } = props;
    return (
        <Appbar.Header style={{ backgroundColor: "#1976d2" }}>
            {back && <Appbar.BackAction onPress={() => {}} color="#fff" />}
            <Appbar.Action icon="account-circle" onPress={() => {}} color="#fff" />
            <Appbar.Content title={children} color="#fff" />
        </Appbar.Header>
    );
};

export default Header;
