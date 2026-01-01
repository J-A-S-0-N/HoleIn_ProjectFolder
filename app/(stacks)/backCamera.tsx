import { Ionicons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Camera = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState<string | null>(null);
    const router = useRouter();

    const cameraRef = useRef<CameraView>(null);

    const [isNineHole, setIsNineHole] = useState(false);

    const takePictureNroute = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri);
            console.log(photo); // Contains uri, width, height, etc.
            router.replace({
                pathname: "./loadingRoute2Review",
                params: { isNineHole: "false" },
            });
        } else{
            console.log("cameraRef is null");
        }
    };

    const insets = useSafeAreaInsets();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: "black" }}
            >
                <View
                    style={{ alignSelf: "flex-start" }}
                >
                    <Text
                        style={{ color: "white", fontWeight: "800", fontSize: 20, marginHorizontal: 10, }}
                    >카메라 접근 설정</Text>
                </View>
                <View
                    style={{ alignSelf: "center", flex: 1, justifyContent: "center" }}
                >
                    {/*camera icon*/}
                    <View
                        style={{
                            marginTop: moderateScale(-40),
                            alignSelf: "center",
                            position: "relative",
                            width: moderateScale(120),
                            height: moderateScale(120),
                            backgroundColor: "rgba(80, 200, 120, 0.1)",
                            borderColor: "rgba(80, 200, 120, 0.4)",
                            borderWidth: 2,
                            borderRadius: moderateScale(60),
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Ionicons name="camera-outline" size={50} color="rgba(80, 200, 120)" />
                        <View
                            style={{
                                padding: 6,
                                backgroundColor: "black",
                                borderRadius: 100,
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                            }}
                        >
                            <Ionicons name="shield-checkmark-outline" size={30} color="white" />
                        </View>
                    </View>
                    {/*header Text*/}
                    <Text
                        style={{
                            alignSelf: "center",
                            marginTop: 20,
                            fontSize: 20,
                            fontWeight: "600",
                            color: "white",
                        }}
                    >카메라 접근 권한이 필요합니다</Text>
                    <Text
                        style={{
                            alignSelf: "center",
                            marginTop: 10,
                            fontSize: 15,
                            fontWeight: "500",
                            color: "gray",
                        }}
                    >스코어 디스크를 촬영하려면 카메라 접근 권한이 필요합니다.</Text>
                    {/*info board*/}
                    <View
                        style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, marginTop: 20, backgroundColor: "#18181B", borderRadius: 10, }}
                    >
                        <View
                            style={{ flexDirection: "row", gap: 20, alignItems: "center", marginBottom: 10, }}
                        >
                            <View
                                style={{ width: 5, height: 5, borderRadius: 100, backgroundColor: "rgba(80, 200, 120, 0.8)" }}
                            >
                            </View>
                            <Text
                                style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                            >디스크 촬영 및 스코어 기록.</Text>
                        </View>
                        <View
                            style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
                        >
                            <View
                                style={{ width: 5, height: 5, borderRadius: 100, backgroundColor: "rgba(80, 200, 120, 0.8)" }}
                            >
                            </View>
                            <Text
                                style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                            >이미지는 기기에만 저장됩니다.</Text>
                        </View>
                    </View>
                    {/*button*/}
                    <TouchableOpacity
                        onPress={requestPermission}
                        style={{
                            paddingHorizontal: 100,
                            height: moderateScale(50),
                            backgroundColor: "rgba(80, 200, 120, 0.8)",
                            borderRadius: 10,
                            alignSelf: "center",
                            marginTop: 40,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                        >
                            카메라 접근 허용
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={"back"} ref={cameraRef}/>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
                locations={[0, 0.5, 1]}
                style={styles.gradient}
            />
            <View style={styles.overlay}>
                <View style={styles.overlayTop} />
                <View style={styles.overlayMiddle}>
                    <View style={styles.overlaySide} />
                    <View style={styles.circleGuide} />
                    <View style={styles.overlaySide} />
                    <View
                        style={{
                            position: "absolute",
                            top: -50,
                            left: "50%",
                            transform: [{ translateX: "-50%" }],
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 10,
                            backgroundColor: "rgba(80, 200, 120, 0.3)",
                            borderColor: "#50C878",
                            borderWidth: 1,
                            //opacity: 0.3,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "500",
                                color: "#ffffffff",
                            }}
                        >디스크를 이 안에 맞춰주세요.</Text>
                    </View>
                </View>
                <View style={styles.overlayBottom} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={takePictureNroute}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        borderWidth: 4,
                        borderColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                    }}
                >
                    {/* Optional: inner circle for emphasis */}
                    <View style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Ionicons name="camera-outline" size={30} color="gray" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert(
                            "뒷면 촬영을 건너뛰시겠습니까?",
                            "건너뛰면 즉시 스코어 검토 화면으로 이동합니다.",
                            [
                                { text: "취소", style: "cancel" },
                                { text: "확인", onPress: () => {
                                    router.replace({
                                        pathname: "./loadingRoute2Review",
                                        params: { isNineHole: "true" }  
                                    })
                                }}
                            ]
                        );
                    }}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                        height:40,
                        backgroundColor: "rgba(31, 136, 66, 1)",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>뒤홀 건너뛰기</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                position: "absolute",
                bottom: moderateScale(20),
                left: "50%",
                transform: [{ translateX: "-50%" }],
                width: "80%",
                paddingVertical: 10,
                borderRadius: 10,
                backgroundColor: "rgba(0,0,0,0.7)",
                zIndex: 999,
            }}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "300", textAlign: "center" }}>📸 디스크의 앞면 그리고 뒷면을 촬영하세요</Text>
                <Text style={{ color: "gray", fontSize: 13, fontWeight: "300", textAlign: "center", marginTop: 5, }}>명확한 사진을 위해 조명이 충분한 곳에서 촬영해주세요.</Text>
            </View>
            <View style={[styles.backButtonContainer, { top: insets.top + 10, left: insets.left + 20 }]}>
                <TouchableOpacity onPress={() => {
                    router.back();
                }}>
                    <Ionicons name="arrow-back-outline" size={32} color="white" />
                </TouchableOpacity>
            </View>
            <View style={[styles.headerTitleContainer, { top: insets.top + 10 }]}>
                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)", padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: "white" }}>스코어 카드 촬영</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 16,
    },
    camera: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    overlayTop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    overlayMiddle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    overlaySide: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    circleGuide: {
        position: "relative",
        width: moderateScale(350),
        height: moderateScale(350),
        borderRadius: moderateScale(175),
        borderWidth: 4,
        borderColor: '#00BC7D',
        borderStyle: "dotted",
    },
    overlayBottom: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    buttonContainer: {
        gap: 10,
        position: 'absolute',
        bottom: moderateScale(90),
        left: 0,
        right: 0,
        width: '100%',
        alignItems: "center",
        //flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    backButtonContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    headerTitleContainer: {
        position: "absolute",
        left: "50%",
        transform: [{ translateX: "-50%" }],
    },
});

export default Camera;