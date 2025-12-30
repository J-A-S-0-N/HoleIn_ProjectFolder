import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Important from "../InfoBoardComponents/important";

const InfoBoard = () => {
    const router = useRouter();

    return (
        <View>
            <Important/>
        </View>
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

export default InfoBoard;