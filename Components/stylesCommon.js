
import {StyleSheet} from "react-native";

export const commonStyles = StyleSheet.create({
    header: {
        fontSize: 20,
        color: "#4a5057",
        fontWeight: "500",
        marginBottom: 8
    },
    primary: {
        fontSize: 16,
        fontWeight: "400"
    },
    secondary: {
        fontSize: 12,
        fontWeight: "300"
    },
    divider: {
        marginVertical: 8,
        width: "100%",
        height: "1px",
        backgroundColor: "#c7c7c7"
    },
    statusSuccess: {
        borderRadius: 20,
        width: "fit-content",
        padding: 5,
        backgroundColor: "#57b91c"
    },
    statusPending: {
        borderRadius: 20,
        width: "fit-content",
        padding: 5,
        backgroundColor: "#b9b9b9"
    },
    statusError: {
        borderRadius: 20,
        width: "fit-content",
        padding: 5,
        backgroundColor: "#c51a1a"
    },
    statusWarning: {
        borderRadius: 20,
        width: "fit-content",
        padding: 5,
        backgroundColor: "#e1b60c"
    },
    tagText: {
        fontSize: 12,
        lineHeight: 12,
        marginBottom: 2
    }
});