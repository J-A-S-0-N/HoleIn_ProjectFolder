import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

const PreCameraLoadingScreen = () => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const router = useRouter();

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/(stacks)/camera")
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <View
                style={{
                    position: "relative",
                    width: moderateScale(120),
                    height: moderateScale(120),
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        width: moderateScale(100),
                        height: moderateScale(100),
                        borderRadius: moderateScale(50),
                        backgroundColor: "rgba(80, 200, 120, 0.4)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Ionicons name="camera-outline" size={50} color="rgba(80, 200, 120)" />
                </View>
                <Animated.View
                    style={{
                        position: "absolute",
                        width: moderateScale(120),
                        height: moderateScale(120),
                        borderRadius: moderateScale(60),
                        borderWidth: 3,
                        borderColor: "transparent",
                        borderTopColor: "rgba(80, 200, 120, 0.8)",
                        transform: [{ rotate: spin }],
                    }}
                />
            </View>
            <Text
                style={{
                    marginTop: 20,
                    color: "white",
                    fontWeight: "800",
                    fontSize: 20,
                }}
            >
                카메라 준비중...
            </Text>
            <Text
                style={{
                    marginTop: 10,
                    color:"gray",
                    fontWeight: "600",
                    fontSize: 15,
                }}
            >잠시만 기달려주세요</Text>
        </View>
    );
};

export default PreCameraLoadingScreen;