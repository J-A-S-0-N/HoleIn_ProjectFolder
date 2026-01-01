import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { moderateScale } from "react-native-size-matters";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

const scoreReviewPage = () => {
    const router = useRouter();

    const { isNineHole } = useLocalSearchParams<{ isNineHole?: string }>();
    const isNineHoleBool = isNineHole === "true";

    const [rowOne, setRowOne] = useState<number[]>(
        [0,0,0,0,0]
    );

    const [rowTwo, setRowTwo] = useState<number[]>(
        [0,0,0,0]
    );

    useEffect(() => {
        console.log(isNineHoleBool);
    }, [isNineHoleBool]);

    const total = useMemo(() => {
        const rowOneTotal = rowOne.reduce((acc, value) => acc + value, 0);
        const rowTwoTotal = rowTwo.reduce((acc, value) => acc + value, 0);
        return rowOneTotal + rowTwoTotal;
    }, [rowOne, rowTwo]);

    const confirmButton = () => {
        if(isNineHoleBool) {
            //is only 9 hole
            //directly save and go to home
            router.replace("./finalLoadingPage");
        } else {
            router.push("./scoreReviewBackNine");
        }
    };

    const deleteButton = () => {
        // TODO implimnet delete function
        // TODO clear from local and firestore db
        Alert.alert(
            "삭제하시겠어요?",
            "삭제하면 되돌릴 수 없어요.",
            [
                {
                    text: "취소",
                    style: "cancel",
                },
                {
                    text: "삭제",
                    style: "destructive",
                    onPress: () => {
                        // TODO implimnet delete function
                        // TODO clear from local and firestore db
                    },
                },
            ],
            { cancelable: true }
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
            >
                <LinearGradient
                    colors={[
                        'rgba(0,0,0,0.6)', // 0 (dark)
                        'rgba(105, 105, 105, 0.2)', // 5 (lighter)
                        'rgba(0,0,0,0.6)', // 0 (dark)
                    ]}
                    locations={[0, 0.5, 1]}
                    style={{ flex: 1 }}
                >
                    {/*header*/}
                    <View style={styles.header}>
                        <Text
                            style={styles.headerTitle}
                        >전반 9홀</Text>
                    </View>
                    {/*seperator*/}
                    <View
                        style={styles.separator}
                    />
                    {/*body*/}
                    <View
                        style={styles.body}
                    >
                        {/*course input*/}
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    marginBottom: moderateScale(5),
                                }}
                            >
                                <View
                                    style={{
                                        width: moderateScale(8),
                                        height: moderateScale(8),
                                        borderRadius: 999,
                                        backgroundColor: "#00BC7D",
                                    }}
                                >

                                </View>
                                <Text
                                    style={styles.courseLabel}
                                >
                                    코스 이름
                                </Text>

                            </View>
                            <TextInput
                                placeholder="예: 올림픽공원 파크골프장"
                                placeholderTextColor={"#52525C"}
                                style={styles.courseInput}
                            />
                        </View>
                        {/*hole List*/}
                        <View
                            style={styles.listContainer}
                        >
                            <Text
                                style={{color: "#9F9FA9", fontSize: moderateScale(13)}}
                            >홀</Text>
                            <View
                                style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(10), gap: moderateScale(10) }}
                            >
                                {Array.from({ length: 5 }, (_, idx) => (
                                    <View
                                        key ={idx}
                                        style={styles.holeBox}
                                    >
                                        <Text
                                            style={styles.holeBoxText}
                                        >
                                            {idx + 1}
                                        </Text>

                                    </View>

                                ))}
                            </View>
                        </View>
                        {/*hit count input*/}
                        <View
                            style={styles.listContainer}
                        >
                            <Text
                                style={{color: "#9F9FA9", fontSize: moderateScale(13)}}
                            >타수</Text>
                            <View
                                style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(10), gap: moderateScale(10) }}
                            >
                                {Array.from({ length: 5 }, (_, idx) => (
                                    <View
                                        key ={idx}
                                        style={styles.column}
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                setRowOne(prev => {
                                                    const next = [...prev];
                                                    next[idx] += 1;          
                                                    return next;
                                                })
                                            }}
                                            style={styles.incButton}
                                        >
                                            <Text style={styles.buttonText}>+</Text>
                                        </TouchableOpacity>
                                        <View
                                            style={styles.countBox}
                                        >
                                            <Text style={{color: "white", fontSize: moderateScale(19), fontWeight: "600"}}>{rowOne[idx]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setRowOne(prev => {
                                                    const next = [...prev];
                                                    next[idx] = Math.max(0, next[idx] - 1); // decrement but stay ≥ 0
                                                    return next;
                                                })

                                            }}

                                            style={styles.decButton}
                                        >
                                            <Text style={{color: "white"}}>-</Text>
                                        </TouchableOpacity>
                                    </View>

                                ))}
                            </View>
                        </View>
                        <View
                            style={styles.listContainer}
                        >
                            <Text
                                style={{color: "#9F9FA9", fontSize: moderateScale(13)}}
                            >홀</Text>
                            <View
                                style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(10), gap: moderateScale(10) }}
                            >
                                {Array.from({ length: 4 }, (_, idx) => (
                                    <View
                                        key ={idx}
                                        style={styles.holeBox}
                                    >
                                        <Text
                                            style={styles.holeBoxText}
                                        >
                                            {idx + 6}
                                        </Text>

                                    </View>

                                ))}
                            </View>
                        </View>
                        <View
                            style={styles.listContainer}
                        >
                            <Text
                                style={{color: "#9F9FA9", fontSize: moderateScale(13)}}
                            >타수</Text>
                            <View
                                style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(10), gap: moderateScale(10) }}
                            >
                                {Array.from({ length: 4 }, (_, idx) => (
                                    <View
                                        key ={idx}
                                        style={styles.column}
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                setRowTwo(prev => {
                                                    const next = [...prev];
                                                    next[idx] += 1;          
                                                    return next;
                                                })
                                            }}
                                            style={styles.incButton}
                                        >
                                            <Text style={styles.buttonText}>+</Text>
                                        </TouchableOpacity>
                                        <View
                                            style={styles.countBox}
                                        >
                                            <Text style={{color: "white", fontSize: moderateScale(19), fontWeight: "600"}}>{rowTwo[idx]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setRowTwo(prev => {
                                                    const next = [...prev];
                                                    next[idx] = Math.max(0, next[idx] - 1); // decrement but stay ≥ 0
                                                    return next;
                                                })

                                            }}

                                            style={styles.decButton}
                                        >
                                            <Text style={{color: "white"}}>-</Text>
                                        </TouchableOpacity>
                                    </View>

                                ))}
                            </View>
                        </View>
                        {/*footer - total and button*/}
                        <View>
                            {/*total*/}
                            <View
                                style={styles.footerTotal}
                            >
                                <Text
                                    style={styles.footerTotalLabel}
                                >전반 합계</Text>
                                <Text
                                    style={styles.footerTotalValue}
                                >{total}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={confirmButton}
                        style={{
                            marginTop: moderateScale(25),
                            marginHorizontal: moderateScale(10),
                            height: moderateScale(45),
                            backgroundColor: "#009966",
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {isNineHoleBool ? (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: moderateScale(5),
                                }}
                            >
                                <Text
                                    style={{color: "white", fontSize: moderateScale(14), fontWeight: "600"}}
                                >
                                    저장하기
                                </Text>
                                <Ionicons name="arrow-forward-outline" size={moderateScale(20)} color="white" />
                            </View>
                        ) : (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: moderateScale(5),
                                }}
                            >
                                <Text
                                    style={{color: "white", fontSize: moderateScale(14), fontWeight: "600"}}
                                >
                                    후반 9홀로 계속
                                </Text>
                                <Ionicons name="arrow-forward-outline" size={moderateScale(20)} color="white" />

                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={deleteButton}
                        style={{
                            flexDirection: "row",
                            marginTop: moderateScale(15),
                            marginHorizontal: moderateScale(10),
                            height: moderateScale(45),
                            backgroundColor: "#9B070E",
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            gap: moderateScale(5),
                        }}
                    >
                        <Text
                            style={{color: "white", fontSize: moderateScale(14), fontWeight: "600"}}
                        >
                        삭제하기 
                        </Text>
                        <Ionicons name="trash-outline" size={moderateScale(20)} color="white" />
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    paddingLeft: 10,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    backgroundColor: "#18181B",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    marginTop: moderateScale(20),
    borderRadius: 10,
    borderColor: "#27272a",
    borderWidth: 2,
  },
  backButton: {
    position: "absolute",
    left: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: moderateScale(17),
  },
  separator: {
    height: 1.5,
    backgroundColor: "#27272a",
    marginVertical: 15,
  },
  body: {
    paddingHorizontal: 10,
  },
  courseLabel: {
    color: "#9F9FA9",
    fontSize: moderateScale(17),
  },
  courseInput: {
    color: "white",
    marginTop: 6,
    fontSize: moderateScale(17),
    backgroundColor: "#18181B",
    borderColor: "#27272a",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  holesContainer: {
    backgroundColor: "#18181B",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    marginTop: moderateScale(20),
    borderRadius: 10,
    borderColor: "#27272a",
    borderWidth: 2,
  },
  holeLabel: {
    color: "#9F9FA9",
    fontSize: moderateScale(13),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScale(10),
    gap: moderateScale(10),
  },
  holeBox: {
    flex: 1,
    backgroundColor: "#272729",
    borderRadius: 10,
    paddingVertical: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
  },
  holeBoxText: {
    color: "white",
    fontSize: moderateScale(15),
    fontWeight: "500",
  },
  hitCountContainer: {
    backgroundColor: "#18181B",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    marginTop: moderateScale(20),
    borderRadius: 10,
    borderColor: "#27272a",
    borderWidth: 2,
  },
  hitCountLabel: {
    color: "#9F9FA9",
    fontSize: moderateScale(13),
  },
  column: {
    flex: 1,
  },
  incButton: {
    backgroundColor: "#009966c9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  decButton: {
    backgroundColor: "#3F3F46",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
  countBox: {
    backgroundColor: "#272729",
    borderRadius: 10,
    paddingVertical: moderateScale(10),
    marginVertical: moderateScale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    color: "white",
  },
  footerTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(20),
    backgroundColor: "#081814",
    borderRadius: 10,
    borderColor: "#064A35",
    borderWidth: 1,
    padding: moderateScale(10),
  },
  footerTotalLabel: {
    color: "#00BC7D",
    fontSize: moderateScale(14),
    fontWeight: "200",
  },
  footerTotalValue: {
    color: "#00BC7D",
    fontSize: moderateScale(20),
    fontWeight: "600",
  },
});

export default scoreReviewPage;