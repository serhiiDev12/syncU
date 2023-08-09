import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
    ContactsPage,
    GroupsPage,
    HomePage,
    InvitePage,
    Profile,
    SingleContact,
    SingleGroup,
    SuccessPage,
    RegistrationPage,
    LogInPage
} from "../Pages";

const screens = {
    HomePage: {
        screen: HomePage
    },
    ContactsPage: {
        screen: ContactsPage
    },
    GroupsPage: {
        screen: GroupsPage
    },
    InvitePage: {
        screen: InvitePage
    },
    Profile: {
        screen: Profile
    },
    SingleContact: {
        screen: SingleContact
    },
    SingleGroup: {
        screen: SingleGroup
    },
    SuccessPage: {
        screen: SuccessPage
    },
    RegistrationPage: {
        screen: RegistrationPage
    },
    LogInPage: {
        screen: LogInPage
    },
}

const SyncUStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
});

export default createAppContainer(SyncUStack);