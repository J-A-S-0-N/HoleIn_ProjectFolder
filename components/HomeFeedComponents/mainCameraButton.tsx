import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

const MainCameraButton = () => {
    const router = useRouter();

    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed && styles.containerPressed,
            ]}
            onPress={() => {
                //router.push("/(stacks)/camera");
                router.push("/(stacks)/preCameraLoadingScreen");
            }}
        >
            <View style={styles.circleGlow}>
                <View style={styles.circleInner}>
                    <Ionicons name="camera-outline" size={35} color="white" />
                </View>
            </View>
            <Text
                style={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "700",
                    marginTop: 5,
                }}
            >
                스코어 카드 촬영
            </Text>
            <Text
                style={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "300",
                    marginTop: 10,
                }}
            >
                디스크를 촬영하여 점수를 기로하세요
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: moderateScale(170),
        backgroundColor: "#008F62",
        borderRadius: 10,
        alignItems: "center",
        paddingTop : moderateScale(14),
        marginTop: 5,
        marginBottom: 15,
        shadowColor: "#3FFFB8",
        shadowOpacity: 0.25,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 0 },
        elevation: 6,
    },
    containerPressed: {
        transform: [{ scale: 0.985 }],
        opacity: 0.95,
    },
    circleGlow: {
        width: moderateScale(74),
        height: moderateScale(74),
        borderRadius: moderateScale(37),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(63, 255, 184, 0.18)",
        shadowColor: "#3FFFB8",
        shadowOpacity: 0.7,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 0 },
        elevation: 12,
    },
    circleInner: {
        justifyContent: "center",
        alignItems: "center",
        width: moderateScale(70),
        height: moderateScale(70),
        borderRadius: moderateScale(35),
        backgroundColor: "#139d74ff",
    },
})

export default MainCameraButton