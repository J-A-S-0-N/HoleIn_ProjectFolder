import React, { useEffect, useMemo, useState } from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const SimpleLoadingScreen = () => {
    const router = useRouter();

    const { isNineHole } = useLocalSearchParams<{ isNineHole?: string }>();

    const STEP_INTERVAL_MS = 5000;
    const END_DELAY_MS = 1200;

    const steps = useMemo(
        () => [
            {
                icon: "checkmark-circle-outline" as const,
                title: "완료!",
                subtitle: "잠시만 기다려주세요",
            },
            {
                icon: "analytics-outline" as const,
                title: "스코어 정리 중",
                subtitle: "입력하신 기록을 계산하고 있어요",
            },
            {
                icon: "sparkles-outline" as const,
                title: "리뷰 준비 중",
                subtitle: "라운드 결과를 보기 좋게 만들고 있어요",
            },
        ],
        []
    );

    const [activeIdx, setActiveIdx] = useState(0);

    const fade = useSharedValue(1);
    const y = useSharedValue(0);
    const progress = useSharedValue(0);

    const totalDurationMs = steps.length * STEP_INTERVAL_MS + END_DELAY_MS;

    useEffect(() => {
        progress.value = withTiming(1, {
            duration: totalDurationMs,
            easing: Easing.linear,
        });

        const tick = setInterval(() => {
            fade.value = withTiming(0, { duration: 220, easing: Easing.out(Easing.cubic) });
            y.value = withTiming(8, { duration: 220, easing: Easing.out(Easing.cubic) });

            setTimeout(() => {
                setActiveIdx((prev) => (prev + 1) % steps.length);
                y.value = -8;
                fade.value = 0;
                fade.value = withTiming(1, { duration: 260, easing: Easing.out(Easing.cubic) });
                y.value = withTiming(0, { duration: 260, easing: Easing.out(Easing.cubic) });
            }, 230);
        }, STEP_INTERVAL_MS);

        const nav = setTimeout(() => {
            router.replace({
                pathname: "./scoreReviewPage",
                params: { isNineHole: isNineHole },
            });
        }, totalDurationMs);

        return () => {
            clearInterval(tick);
            clearTimeout(nav);
        };
    }, [isNineHole, progress, fade, y, router, steps.length, totalDurationMs]);

    const step = steps[activeIdx];

    const animatedStepStyle = useAnimatedStyle(() => {
        return {
            opacity: fade.value,
            transform: [{ translateY: y.value }],
        };
    });

    const animatedProgressStyle = useAnimatedStyle(() => {
        return {
            width: `${Math.round(progress.value * 100)}%`,
        };
    });

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={[
                    'rgba(0,0,0,0.6)', // 0 (dark)
                    'rgba(105, 105, 105, 0.2)', // 5 (lighter)
                    'rgba(0,0,0,0.6)', // 0 (dark)
                ]}
                locations={[0, 0.5, 1]}
                style={styles.centerWrap}
            >
                <View style={styles.ringWrap}>
                    <View style={styles.ringBg} />
                    <ActivityIndicator size="large" color="#00BC7D" />
                </View>

                <Animated.View style={[styles.stepWrap, animatedStepStyle]}>
                    <View style={styles.smallIconBox}>
                        <Ionicons name={step.icon} size={moderateScale(22)} color="#FFFFFF" />
                    </View>
                    <Text style={styles.title}>{step.title}</Text>
                    <Text style={styles.subtitle}>{step.subtitle}</Text>
                </Animated.View>

                <View style={styles.progressArea}>
                    <View style={styles.progressBarBg}>
                        <Animated.View style={[styles.progressBarFill, animatedProgressStyle]} />
                    </View>
                    <View style={styles.progressMetaRow}>
                        <Text style={styles.metaLeft}>단계 {Math.min(activeIdx + 1, steps.length)}/{steps.length}</Text>
                        <Text style={styles.metaRight}>{Math.round((activeIdx / Math.max(1, steps.length - 1)) * 100)}%</Text>
                    </View>
                </View>

                <View style={styles.tipBox}>
                    <Ionicons name="bulb-outline" size={moderateScale(16)} color="#00BC7D" />
                    <Text style={styles.tipText}>매 라운드 기록으로 실력 향상을 확인하세요!</Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    centerWrap: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: moderateScale(18),
    },
    ringWrap: {
        width: moderateScale(110),
        height: moderateScale(110),
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: moderateScale(18),
    },
    ringBg: {
        position: "absolute",
        width: moderateScale(110),
        height: moderateScale(110),
        borderRadius: 999,
        backgroundColor: "#081814",
        borderWidth: 1,
        borderColor: "#064A35",
    },
    stepWrap: {
        alignItems: "center",
    },
    smallIconBox: {
        width: moderateScale(44),
        height: moderateScale(44),
        borderRadius: 10,
        backgroundColor: "#00BC7D",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: moderateScale(10),
    },
    title: {
        color: "white",
        fontSize: moderateScale(20),
        fontWeight: "700",
    },
    subtitle: {
        color: "#9F9FA9",
        fontSize: moderateScale(13),
        marginTop: moderateScale(6),
    },
    progressArea: {
        width: "100%",
        marginTop: moderateScale(40),
    },
    progressBarBg: {
        height: moderateScale(12),
        borderRadius: 999,
        backgroundColor: "#0A0A0A",
        borderColor: "#064A35",
        borderWidth: 1,
        overflow: "hidden",
    },
    progressBarFill: {
        height: "100%",
        backgroundColor: "#00BC7D",
        borderRadius: 999,
    },
    progressMetaRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(10),
    },
    metaLeft: {
        color: "#9F9FA9",
        fontSize: moderateScale(12),
    },
    metaRight: {
        color: "#9F9FA9",
        fontSize: moderateScale(12),
    },
    tipBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: moderateScale(8),
        marginTop: moderateScale(40),
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(14),
        borderRadius: 14,
        backgroundColor: "#081814",
        borderColor: "#064A35",
        borderWidth: 1,
    },
    tipText: {
        color: "#00BC7D",
        fontSize: moderateScale(13),
        fontWeight: "500",
    },
});

export default SimpleLoadingScreen;
