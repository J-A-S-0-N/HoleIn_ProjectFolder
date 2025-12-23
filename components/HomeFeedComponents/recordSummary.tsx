import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

const RecordSummary = () => {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.subComponentStyle}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 4,
                    }}
                >
                    <EvilIcons name="trophy" size={24} color="gold" />
                    <Text
                        style={styles.mainTitleText}
                    >이번달 기록</Text>

                </View>
                <Text
                    style={styles.metricText}
                >18회</Text>
            </View>
            <View
                style={styles.subComponentStyle}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 4,
                    }}
                >
                    <EvilIcons name="trophy" size={24} color="gold" />
                    <Text
                        style={styles.mainTitleText}
                    >이번달 기록</Text>

                </View>
                <Text
                    style={styles.metricText}
                >18회</Text>
            </View>
            <View
                style={styles.subComponentStyle}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 4,
                    }}
                >
                    <MaterialCommunityIcons name="fire" size={24} color="#FF6800" />
                    <Text
                        style={styles.mainTitleText}
                    >최고기록</Text>

                </View>
                <Text
                    style={styles.metricText}
                >10타</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    /*
    container: {
        backgroundColor: "#18181B",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    */
    metricText: {
        color: "white",
        fontSize: 20,
    },
    mainTitleText: {
        color: "#9F9FA9",
        fontSize: 12
    },
    subComponentStyle: {
        width: moderateScale(110),
        padding: 15,
        backgroundColor: "#18181B",
        borderRadius: 10,
        borderColor: "#27272A",
        borderWidth: 1,
    }
    
})

export default RecordSummary;