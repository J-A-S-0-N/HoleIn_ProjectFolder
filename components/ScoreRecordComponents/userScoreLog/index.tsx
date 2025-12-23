import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ScoreCardComponent from "./scoreCardComponent";

export default function index({ ListHeaderComponent }: { ListHeaderComponent?: React.ReactElement }) {
    const [testLogs, setTestLogs] = useState([
        { hole1: 30, hole2: 10, hole3: 50, hole4: 40, hole5: 35, hole6: 25, hole7: 45, hole8: 30, hole9: 20, hole10: 15, hole11: 55, hole12: 40, hole13: 35, hole14: 25, hole15: 30, hole16: 20, hole17: 45, hole18: 50, score: 10, time: "2025-12-22 10:00", location: "올림픽공원 파크골프장", isNineHole: false },
        { hole1: 30, hole2: 10, hole3: 50, hole4: 40, hole5: 35, hole6: 25, hole7: 45, hole8: 30, hole9: 20, hole10: 15, hole11: 55, hole12: 40, hole13: 35, hole14: 25, hole15: 30, hole16: 20, hole17: 45, hole18: 50, score: 10, time: "2025-12-22 10:00", location: "올림픽공원 파크골프장", isNineHole: true },
    ]);

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View
                style={{marginBottom: 20,}}
            >
                <ScoreCardComponent item={item} />
            </View>
        );
    }

    return (
        <FlatList
            data={testLogs}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={ListHeaderComponent}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
})