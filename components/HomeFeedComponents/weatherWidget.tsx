import Fontisto from '@expo/vector-icons/Fontisto';
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from 'react-native-size-matters';

const WeatherWidget = () => {
    return (
        <View
            style={
                styles.container
            }
        >
            <Fontisto name="rains" size={30} color="#9F9FA9" />
            <View>
                <Text
                    style={
                        styles.mainWeatherText
                    }
                >1.5°C</Text>
                <Text
                    style={styles.subWeatherText}
                >시흥제3동</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#18181B",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
        borderColor: "#27272A",
        borderWidth: 1,
    },
    mainWeatherText: {
        color: "white",
        fontSize: moderateScale(24),
    },
    subWeatherText: {
        color: "#9F9FA9",
        fontSize: moderateScale(20),
    },
    
})

export default WeatherWidget;