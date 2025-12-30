import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MainBodyComponent from '@/components/HomeFeedComponents/mainBodyComponent';
import SuggestionBox from '@/components/HomeFeedComponents/suggestionBox';
import InfoBoard from '@/components/HomeFeedComponents/InfoBoardComponent';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { SafeAreaView as RNCSafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { USERNAME_STORAGE_KEY } from '@/contexts/UserContext';
import { store } from 'expo-router/build/global-state/router-store';

export default function HomeScreen() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const loadUsername = async () => {
      const storedUsername = await AsyncStorage.getItem(USERNAME_STORAGE_KEY);
      setUsername(storedUsername);
    };
    loadUsername();
  }, []);


  return (
    <RNCSafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#09090B" }}
    >
      <ScrollView
        style={{ flex: 1 }}
      >
        {/*Header Component*/}
        <View
          style={headerStyle.headerContainer}
        >
          <View
            style={headerStyle.headerTitleContainer}
          >
            <Text style={headerStyle.headerTitle}>
              {username ? `${username}님의 홀인` : '홀인'} -
            </Text>
            <Text style={headerStyle.headerSubTitle}>1등 스토어 AI 트레커</Text>
          </View>
          <Pressable
            hitSlop={moderateScale(10)}
            onPress={() => router.push('/modal')}
            accessibilityRole="button"
            accessibilityLabel="Open settings"
          >
            <Ionicons name="settings-outline" size={moderateScale(22)} color="#F4F4F5" />
          </Pressable>
        </View>
        {/*seperator*/}
        <View
          style={{
            marginVertical: moderateScale(20),
            height: 3,
            width: "100%",
            backgroundColor: "#18181B",
          }}
        />
        {/*this is for testing ONLY !!!!!!!!*/}
        {/*
        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: "white",
          }}
          onPress={() => {
            AsyncStorage.removeItem(USERNAME_STORAGE_KEY);
            console.log("cleared username")
          }}
        >
        </TouchableOpacity>
        */}
        {/*Body Component*/}
        <MainBodyComponent />
        <Text
          style={{ fontSize: 20, fontWeight: "700", color: "white", marginHorizontal: moderateScale(15), marginBottom: moderateScale(20), marginTop: moderateScale(20) }}
        >건의함</Text>
        {/*suggestion box*/}
        <SuggestionBox />
        {/*padding bottom*/}
        <View
          style={{ height: moderateScale(20) }}
        />
      </ScrollView>
    </RNCSafeAreaView>
  );
}

const styles = StyleSheet.create({
  suggestionBoxContainer: {
    backgroundColor: "#18181b",
    borderRadius: 10,
    borderColor: "#27272A",
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 10,
  }
});

const headerStyle = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  headerTitleContainer: {
    gap: moderateScale(5),
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F4F4F5",
  },
  headerSubTitle: {
    fontSize: 19,
    fontWeight: "300",
    color: "#f4f4f5b3",
  }
})
