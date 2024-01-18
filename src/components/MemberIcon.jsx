import { Avatar } from "react-native-paper";

const color = (rn) => {
    switch (rn) {
        case 1:
            return "#FF0000";
        case 2:
            return "#FF00A7";
        case 3:
            return "#D800FF";
        case 4:
            return "#00F5FF";
        case 5:
            return "#00FF76";
        case 6:
            return "#00C12D";
        case 7:
            return "#FFFF00";
        case 8:
            return "#FF9300";
        default:
            return "#000000";
    }
};

export default function MemberIcon(props) {
    const { number, size } = props;

    return <Avatar.Icon size={size} icon="account-tie-outline" color="#fff" style={{ backgroundColor: color(number) }} />;
}
