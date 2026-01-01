import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

const SimpleLoadingScreen = () => {
    const router = useRouter();

    useEffect(() => {
        const interval = setTimeout(() => {
            router.replace("./backCamera")
        }, 1500);

        return () => clearTimeout(interval);
    }, [])
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <ActivityIndicator size="large" color="rgba(80, 200, 120, 0.8)" />
        </View>
    );
};

export default SimpleLoadingScreen;
