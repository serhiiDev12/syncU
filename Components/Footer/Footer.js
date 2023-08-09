import { View } from "react-native";
import {footerStyles} from "./styles";
import { IconButton } from "react-native-paper";
import router from "../../router/router";

export default function Footer() {

    const redirectToSearch = () => {
    }

    const redirectToHomePage = () => {
    }

    const redirectToInvitePage = () => {

    }

    const redirectToNotifications = () => {

    }

    const redirectToCalendar = () => {

    }

    return (
        <View style={footerStyles.container}>
            <IconButton icon="account-search" onPress={redirectToSearch} />
            <IconButton icon="bell-ring-outline" onPress={redirectToNotifications} />
            <IconButton style={footerStyles.homeButton}  icon="home-outline" onPress={redirectToHomePage} />
            <IconButton icon="human-greeting" onPress={redirectToInvitePage} />
            <IconButton icon="calendar-edit" onPress={redirectToCalendar} />
        </View>
    );
}