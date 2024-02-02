import moment from "moment";

export const dateToStringFull = (date) => {
    return moment(date).format("YYYY年M月D日 H時mm分");
};
