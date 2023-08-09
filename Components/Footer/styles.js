import { StyleSheet } from 'react-native';
import { secondaryWhite, footerHeight } from "../../styleVariables";

export const footerStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 12
    },
    homeButton: {
        backgroundColor: "#F9EAC9"
    }
})