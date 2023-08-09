import { styles } from "./styles";
import { commonStyles } from "../stylesCommon";
import {View, Text} from "react-native";
import { getTime } from "../../services/dateFormatter";

export default function SlotItem ({ title, groupId, userSenderId, userReceiverId, startTime, endTime, description }) {
    return (
        <View style={styles.slot}>
            <View>
                <Text style={commonStyles.secondary}>{getTime(startTime)}</Text>
                <Text style={commonStyles.secondary}>{getTime(endTime)}</Text>
            </View>
            <View style={styles.item}>
                <Text numberOfLines={1} style={commonStyles.primary}>{title}</Text>
                <Text numberOfLines={1} style={commonStyles.secondary}>{description}</Text>
            </View>
        </View>
    );
}