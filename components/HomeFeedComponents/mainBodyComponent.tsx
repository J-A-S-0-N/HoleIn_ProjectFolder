import { View, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import MainCameraButton from "./mainCameraButton";
import RecordSummary from "./recordSummary";
import WeatherWidget from "./weatherWidget";
import InfoBoard from "./InfoBoardComponent";


const MainBodyComponent = () => {
    return (
        <View
            style={{
                paddingHorizontal: 10,
            }}
        >
            <WeatherWidget />
            <RecordSummary />
            <MainCameraButton />
            {/*suggestion box header*/}
            <Text
            style={{ fontSize: 20, fontWeight: "700", color: "white", marginBottom: moderateScale(20), marginTop: moderateScale(20) }}
            >공지사항</Text>
            <InfoBoard />
        </View>
    )
}

export default MainBodyComponent