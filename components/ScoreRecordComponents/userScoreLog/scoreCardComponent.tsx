import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
};

const ScoreCardComponent = ({ item }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const IndividualHoleScore = ({ holeNumber, hitCount }: { holeNumber: number; hitCount: number }) => {
        return (
            <View
                style={{
                    justifyContent: "center",
                    borderRadius: 5,
                    alignItems: "center",
                    backgroundColor: "#27272A",
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    gap: 3,
                }}
            >
                <Text
                    style={{
                        color: "#9F9FA9",
                        fontWeight: "300",
                        fontSize: 14,
                    }}
                >
                    {holeNumber}
                </Text>
                <Text
                    style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: 15,
                    }}
                >{hitCount}</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity
            onPress={() => {
                if (isExpanded == true) {
                    setIsExpanded(false);
                } else {
                    setIsExpanded(true);
                }
            }}
            style={{
                justifyContent: "space-between",
                backgroundColor: "#18181B",
                borderColor: "#27272A",
                borderWidth: 1,
                borderRadius: 10,
                padding: 15,
            }}
        >
            {isExpanded ? (
                <>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        {/*time and date*/}
                        <Text
                            style={{
                                color: "#9F9FA9",
                                fontSize: 15,
                            }}
                        >{formatDate(item.time)}</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 3,
                                marginTop: 5,
                            }}
                        >
                            <EvilIcons name="location" size={18} color="white" />
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 18,
                                }}
                            >{item.location}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                color: "white",
                                fontWeight: "800",
                            }}
                        >{item.score}</Text>
                        <Text
                            style={{
                                color: "#FF6467",
                                fontSize: 15,
                            }}
                        >
                            +8 (Par54)
                        </Text>
                    </View>

                </View>
                <View
                    style={{
                        backgroundColor: "#27272A",
                        marginVertical: 10,
                        height: 1,
                        width: "100%",
                    }}
                ></View>
                <Text
                    style={{
                        color: "#9F9FA9",
                        fontSize: 15,
                    }}
                >앞 9홀 (1 ~ 9)</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10,
                    }}
                >
                    {item.isNineHole ? (
                        <>
                        {[1,2,3,4,5,6,7,8,9].map((holeNum) => (
                            <IndividualHoleScore
                                key={holeNum}
                                holeNumber={holeNum}
                                hitCount={item[`hole${holeNum}`]}
                            />
                        ))}
                        </>
                    ):(
                        <View>
                            <View
                                style={{
                                    width: "100%",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                {[1,2,3,4,5,6,7,8,9].map((holeNum) => (
                                    <IndividualHoleScore
                                        key={holeNum}
                                        holeNumber={holeNum}
                                        hitCount={item[`hole${holeNum}`]}
                                    />
                                ))}
                            </View>
                            <Text
                                style={{
                                    color: "#9F9FA9",
                                    marginTop: 10,
                                    fontSize: 15,
                                }}
                            >뒤 9홀 (10 ~ 18)</Text>
                            <View
                                style={{
                                    width: "100%",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((holeNum) => (
                                    <IndividualHoleScore
                                        key={holeNum}
                                        holeNumber={holeNum}
                                        hitCount={item[`hole${holeNum}`]}
                                    />
                                ))}
                            </View>
                        </View>
                    )}
                </View>
                </>
            ) : (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        {/*time and date*/}
                        <Text
                            style={{
                                color: "#9F9FA9",
                                fontSize: 15,
                            }}
                        >{formatDate(item.time)}</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 3,
                                marginTop: 5,
                            }}
                        >
                            <EvilIcons name="location" size={18} color="white" />
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 18,
                                }}
                            >{item.location}</Text>
                        </View>
                        <View
                            style={{
                                marginTop: 10,
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 3,
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 15,
                                    fontWeight: "700"
                                }}
                            >
                                홀
                            </Text>
                            <Text
                                style={{
                                    color: "#9F9FA9",
                                    fontSize: 14
                                }}
                            >
                                : {item.hole1} {item.hole2} {item.hole3} {item.hole4} {item.hole5} ...
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                color: "white",
                                fontWeight: "800",
                            }}
                        >{item.score}</Text>
                        <Text
                            style={{
                                color: "#FF6467",
                                fontSize: 15,
                            }}
                        >
                            +8 (Par54)
                        </Text>
                        <View
                            style={{
                                marginTop: 10,
                            }}
                        >
                            <Entypo name="chevron-small-down" size={20} color="white" />           
                        </View>
                    </View>
                </View>
            )}
        </TouchableOpacity>
    )
};

export default ScoreCardComponent;