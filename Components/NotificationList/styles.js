import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    item: {
        width: '100%',
        flex: 1,
        paddingRight: 8
    },
    notificationItem: {
        flex: 1,
        flexDirection:"row",
        justifyContent: "space-between",
        width: '100%',
        height: '100%',
        padding: 6,
        marginBottom: 6,
        borderStyle: "solid",
        borderLeftColor: "#FBDD99",
        borderLeftWidth: 3,
        borderTopColor: "#c9c9c9",
        borderBottomColor: "#c9c9c9",
        borderRightColor: "#c9c9c9",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
    }
});