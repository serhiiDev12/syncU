import { styles } from "./styles";
import { View, Text } from "react-native";
import { commonStyles } from '../stylesCommon';
import {useEffect, useState} from "react";
import { slotsService } from '../../services';
import SlotItem from "./SlotItem";

export default function Slots () {
    const [slots, setSlots] = useState([]);
    useEffect(() => {
        // slotsService.getPersonalSlots(setSlots);
    }, [])


    return (
        <View style={styles.container}>
            <View style={commonStyles.divider}></View>
            <Text style={commonStyles.header}>Your time slots</Text>
            {
                slots.map((item, index) => <SlotItem
                    key={index + item.startTime}
                    {...item}
                />)
            }
        </View>
    );
}