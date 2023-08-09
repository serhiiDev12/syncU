import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Navigator from "./router/router";
import Footer from './Components/Footer/Footer'

export default function App() {
    const navigate = (screenName, callback) => callback(screenName);

  return (
    <View style={styles.container}>
        <Navigator />
        <View  style={styles.footer}><Footer /></View>
    </View>
  );
}
const styles = {
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    workingCanvas: {
        flex: 15,
        overflow: "hidden"
    },
    footer: {
        flex: 1,
        height: 75,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#FAFAFA",
        left: 0,
        right: 0
    }
};