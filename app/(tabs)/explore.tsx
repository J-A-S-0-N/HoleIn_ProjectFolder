import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PeriodSelector from '@/components/ScoreRecordComponents/PeriodSelector';
import StatComponent from '@/components/ScoreRecordComponents/StatComponent';
import UserScoreLog from '@/components/ScoreRecordComponents/userScoreLog/index';
import Feather from '@expo/vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters';

export default function TabTwoScreen() {
  const [selected, setSelected] = useState<number>(0);
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#09090B", paddingHorizontal: moderateScale(10) }}
    >
      <UserScoreLog 
        ListHeaderComponent={
          <>
            {/*header*/}
            <View
              style={{
                marginTop: moderateScale(10),
                marginHorizontal: moderateScale(10),
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: moderateScale(25),
                  fontWeight: "600",
                }}
              >스코어기록</Text>
            </View>
            {/*Selector component*/}
            <PeriodSelector value={selected} onChange={setSelected} />
            {/*seperator*/}
            <View
              style={{
                marginVertical: moderateScale(15),
                height: 1,
                width: "100%",
                backgroundColor: "#27272A",
              }}
            />
            {/*stat*/}
            <StatComponent value={selected} />
            {/*user score logs*/}
            {/*score log header*/}
            <View
              style={{flexDirection: "row", gap: moderateScale(4), marginVertical: moderateScale(15), alignItems: "center"}}
            >
              <Feather name="calendar" size={moderateScale(18)} color="#9F9FA9" />
              <Text
                style={{
                  color: "#9F9FA9",
                  fontSize: moderateScale(18),
                  fontWeight: "300",
                }}
              >최근기록</Text>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: moderateScale(-90),
    left: moderateScale(-35),
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
