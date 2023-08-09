import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    notifications: {
        width: '95%',
        padding: 8,
        marginTop: 12,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    upcomingAppointment: {
        width: '85%',
        margin: 'auto',
        padding: 8,
        marginBottom: 8
    },
    footer: {
        flex: 1,
        height: 75,
        position: "absolute",
        bottom: -60,
        backgroundColor: "#FAFAFA",
        left: 0,
        right: 0
    }
});