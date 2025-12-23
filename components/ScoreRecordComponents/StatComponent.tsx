import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    value: number;
};

export default function StatComponent({ value, }: Props) {
    return (
        <View
            style={{
                borderRadius: 10,
                backgroundColor: "#18181B",
                borderColor: "#27272A",
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 15,
            }}
        >
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginBottom: 15,
                }}
            >
                <View
                    style={{
                        width: 150,
                    }}
                >
                    <View
                        style={{ gap: 5 }}
                    >
                        <Text
                            style={{
                                color: "#9F9FA9",
                                fontSize: 18,
                                fontWeight: "300",
                            }}
                        >총라운드</Text>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 25,
                                fontWeight: "500",
                            }}
                        >12</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: 150,
                    }}
                >
                    <View
                        style={{ gap: 5 }}
                    >
                        <Text
                            style={{
                                color: "#9F9FA9",
                                fontSize: 18,
                                fontWeight: "300",
                            }}
                        >평균타수</Text>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 25,
                                fontWeight: "500",
                            }}
                        >60</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 10,
                }}
            >
                <View
                    style={{
                        width: 150,
                    }}
                >
                    <View
                        style={{ gap: 5 }}
                    >
                        <Text
                            style={{
                                color: "#9F9FA9",
                                fontSize: 18,
                                fontWeight: "300",
                            }}
                        >최고기록</Text>
                        <Text
                            style={{
                                color: "#00BC7D",
                                fontSize: 25,
                                fontWeight: "500",
                            }}
                        >12</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: 150,
                    }}
                >
                    <View
                        style={{ gap: 5 }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            <SimpleLineIcons name="graph" size={24} color="#9F9FA9" />
                            <Text
                                style={{
                                    color: "#9F9FA9",
                                    fontSize: 18,
                                    fontWeight: "300",
                                }}
                            >향상도</Text>

                        </View>
                        <Text
                            style={{
                                color: "#00BC7D",
                                fontSize: 25,
                                fontWeight: "500",
                            }}
                        >+5.3%</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadowButton: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 8,
    },
});
