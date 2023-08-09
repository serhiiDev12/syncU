import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import { styles } from "./styles";
import NotificationList from '../../Components/NotificationList';
import Slots from "../../Components/Slots";

export default function HomePage() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.notifications}>
                <NotificationList />
                <Slots />
            </View>
        </ScrollView>
    );
}