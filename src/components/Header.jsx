import { Appbar } from "react-native-paper";

const Header = (props) => {
    const { children } = props;
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title={children} />
            <Appbar.Action icon="github" onPress={() => {}} />
        </Appbar.Header>
    );
};

export default Header;
