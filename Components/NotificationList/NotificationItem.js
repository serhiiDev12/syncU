import {View, Text} from "react-native";
import { styles } from './styles'
import {commonStyles} from "../stylesCommon";
import StatusTag from "../StatusTag/StatusTag";

export default function NotificationItem({title, description, statusId, isActive}) {
    return (
        <View style={styles.notificationItem}>
            <View style={styles.item}>
                <Text numberOfLines={1} style={commonStyles.primary}>{title}</Text>
                <Text numberOfLines={1} style={commonStyles.secondary}>{description}</Text>
            </View>
            <View>
                <StatusTag statusId={statusId} />
            </View>
        </View>
    );
}