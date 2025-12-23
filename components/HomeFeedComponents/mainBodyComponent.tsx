import { View } from "react-native";
import MainCameraButton from "./mainCameraButton";
import RecordSummary from "./recordSummary";
import WeatherWidget from "./weatherWidget";

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
        </View>
    )
}

export default MainBodyComponent