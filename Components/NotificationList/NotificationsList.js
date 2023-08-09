import { useEffect, useState } from 'react';
import { useFetch } from 'use-http';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from "./styles";
import { notificationService } from "../../services";
import NotificationItem from "./NotificationItem";
import { commonStyles } from '../stylesCommon';

export default function NotificationsList() {
    const [notifications, setNotifications] = useState([]);

    useEffect( () => {
        // notificationService.getNotifications(setNotifications);
    }, [])

    return (
        <View style={styles.container}>
            <View style={commonStyles.divider}></View>
            <Text style={commonStyles.header}>Notifications</Text>
            {
                notifications.map((item, index) => <NotificationItem
                    key={new Date().getTime() + index}
                    title={item.title}
                    description={item.description}
                    isActive={item.isActive}
                    statusId={item.statusId}
                />)
            }
        </View>
    );
}