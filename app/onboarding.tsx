import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '@/firebase/_firebase';
import { useNavigation, useRouter } from 'expo-router';

import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

//<Feather name="users" size={24} color="black" />

const USERNAME_STORAGE_KEY = '@holein_username';

interface OnboardingProps {
    visible: boolean;
    onClose: () => void;
}

const setFirebaseName = async (username: string) => {
    //check if the user name already exists
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("name", "==", username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        console.error("User name already exists");
        return 1;
    }

    //write the user name to the database
    const docRef = await addDoc(collection(db, 'users'), {
        name: username,
    });
    console.log("Document written with ID: ", docRef.id);
}

export default function Onboarding({ visible, onClose }: OnboardingProps) {
    //Toast Configuration
    const toastConfig = {
        error: (props : any) => (
            <ErrorToast
                {...props}
                style={{ borderLeftColor: '#FF5555', backgroundColor: '#18181B', marginTop: 20, }}
                text1Style={{ color: '#FF8A8A', fontSize: moderateScale(18), fontWeight: '600' }}
                text2Style={{ color: '#F5F5F5', fontSize: moderateScale(15) }}
            />
        ),
    };

    const [username, setUsername] = useState('');
    const router = useRouter();

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const handleContinue = async () => {
        // check if user input is valid
        if (!username.trim()) {
            Toast.show({
                type: 'error',
                text1: '오류',
                text2: '사용자 이름을 입력해주세요.',
                visibilityTime: 5000,
            });
            return;
        }
        // TODO: write a check script that checks if the username is exists
        // TODO: check if username is valid (length, characters, etc.)

        // Validate username length
        if (username.length < 3 || username.length > 8) {
            Toast.show({
                type: 'error',
                text1: '오류',
                text2: '닉네임은 3자 이상 8자 이하로 입력해주세요.',
                visibilityTime: 5000,
            });
            return;
        }

        // Validate username characters (Korean, English, numbers, and underscore only)
        const usernameRegex = /^[\p{Script=Hangul}a-zA-Z0-9_]+$/u;

        if (!usernameRegex.test(username)) {
            Toast.show({
                type: 'error',
                text1: '오류',
                text2: '한글, 영문, 숫자, 밑줄(_)만 사용할 수 있습니다.',
                visibilityTime: 5000,
            });
            return;
        }

        // Username is valid
        await AsyncStorage.setItem(USERNAME_STORAGE_KEY, username);
        //Run firebase write function
        setFirebaseName(username);

        //Close modal
        onClose();
    };

    if (!visible) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ borderColor: "#27272A", borderWidth: 1, backgroundColor: '#18181B', margin: 20, padding: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                    <Text style={{ fontSize: moderateScale(18), fontWeight: '600', marginBottom: moderateScale(5), alignSelf: "center", color: "white" }}>환영합니다!</Text>
                    <Text style={{ textAlign: "center", fontSize: moderateScale(16), fontWeight: '400', marginBottom: moderateScale(15), alignSelf: "center", color: "#a1a1a1ff" }}>홀인에 오신 것을 환영합니다.{'\n'}시작전에 사용자 이름을 입력해주세요.</Text>

                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
                        <Feather name="users" size={moderateScale(15)} color="white" />
                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', marginLeft: moderateScale(5), color: "white" }}>사용자 이름</Text>
                    </View>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="닉네임을 입력해주세요"
                        placeholderTextColor="#717182"
                        style={{
                            color: "white",
                            borderWidth: 1,
                            borderColor: '#3f3f46', // dark gray for input border
                            padding: moderateScale(12),
                            borderRadius: moderateScale(8),
                            marginBottom: moderateScale(20),
                        }}
                    />
                    <Text style={{ textAlign: "center", fontSize: moderateScale(12), fontWeight: '400', marginBottom: moderateScale(15), alignSelf: "center", color: "#ff5353ff" }}>현재 이름을 설정하신 후에는 변경이 불가합니다. </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#008F62',
                            padding: moderateScale(12),
                            borderRadius: 8,
                            alignItems: 'center',
                        }}
                        onPress={handleContinue}>
                        <Text style={{ color: 'white', fontSize: moderateScale(15), fontWeight: "bold" }}>시작하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Toast config={toastConfig}/>
        </Modal>
    );
}
