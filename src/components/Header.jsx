/* paper */
import { Appbar } from "react-native-paper";

const Header = (props) => {
    const { children, back } = props;
    return (
        <Appbar.Header style={{ backgroundColor: "#F3EDF6" }}>
            {back && <Appbar.BackAction onPress={() => {}} />}
            <Appbar.Action icon="account-circle" onPress={() => {}} />
            <Appbar.Content title={children} />
        </Appbar.Header>
    );
};

export default Header;
