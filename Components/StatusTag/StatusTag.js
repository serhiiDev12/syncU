import { View, Text } from "react-native";
import { commonStyles } from "../stylesCommon";
import StatusEnum from "./StatusEnum";

export default function StatusTag ({ statusId }) {
    const {
        statusSuccess,
        statusPending,
        statusError
    } = commonStyles

    const getStatusColor = () => {
        switch (statusId) {
            case StatusEnum.Pending:
                return statusPending;
            case StatusEnum.Accepted:
                return statusSuccess;
            case StatusEnum.Denied:
                return statusError
            default:
                return statusPending;

        }
    }

    const getStatusText = () => {
        switch (statusId) {
            case StatusEnum.Pending:
                return 'Pending';
            case StatusEnum.Accepted:
                return 'Accepted';
            case StatusEnum.Denied:
                return 'Declined'
            default:
                return 'Pending';
        }
    }

    return (
        <View style={getStatusColor()}>
            <Text style={commonStyles.tagText}>{getStatusText()}</Text>
        </View>
    );
}