import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 8,
        borderTopColor: "",
    },
    item: {
        width: '100%',
        backgroundColor: "#FBDD99",
        padding: 8,
        marginLeft: 12,
        flex: 1,
        borderRadius: 8
    },
    slot: {
        width: '100%',
        padding: 8,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 1,
        marginBottom: 5
    }
})