import { Pressable, StyleSheet, Text, View } from 'react-native';

import MainBodyComponent from '@/components/HomeFeedComponents/mainBodyComponent';
import SuggestionBox from '@/components/HomeFeedComponents/suggestionBox';
import { useUser } from '@/contexts/UserContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { SafeAreaView as RNCSafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

export default function HomeScreen() {
  const router = useRouter();
  const { username } = useUser();

  return (
    <RNCSafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#09090B" }}
    >
      <ScrollView
        style={{ flex:1 }}
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

        {/*Body Component*/}
        <MainBodyComponent />
        {/*suggestion box header*/}
        <Text
          style={{fontSize: 20, fontWeight: "700", color: "white", marginHorizontal: 15, marginBottom: 10}}
        >건의함</Text>
        {/*suggestion box*/}
        <SuggestionBox/>
        {/*padding bottom*/}
        <View
          style={{height: moderateScale(20)}}
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
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#F4F4F5",
  },
  headerSubTitle: {
    fontSize: 17,
    fontWeight: "300",
    color: "#f4f4f5b3",
  }
})
