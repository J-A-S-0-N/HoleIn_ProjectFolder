import { View, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Ionicons from '@expo/vector-icons/Ionicons';

const Important = () => {
    return (
        <View
            style={{
                backgroundColor: "#371808",
                flexDirection: "row",
                borderColor: "#724306",
                borderWidth: 1,
                borderRadius: 10,
            }}
        >
            {/*info logo*/}
            <View
                style={{
                    marginLeft: moderateScale(15),
                    marginRight: moderateScale(10),
                    marginVertical: moderateScale(13),
                    width: moderateScale(30),
                    height: moderateScale(30),
                    borderRadius: moderateScale(15),
                    backgroundColor: "#5D3607",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Ionicons name="information-circle-outline" size={moderateScale(20)} color="#FFD230" />
            </View>
            {/*main info*/}
            <View
                style={{
                    flex:1,
                    marginVertical: moderateScale(13),
                    marginRight: moderateScale(20),
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "#FFD230",
                            fontSize: moderateScale(18),
                            fontWeight: "800",
                        }}
                    >공지사항</Text>
                    <View
                        style={{
                            paddingHorizontal: moderateScale(10),
                            paddingVertical: moderateScale(3),
                            marginHorizontal: moderateScale(5),
                            borderRadius: 10,
                            backgroundColor: "#5D3607",
                        }}
                    >
                        <Text
                            style={{
                                color: "#FFD230",
                            }}
                        >중요</Text>
                    </View>
                </View>
                <Text
                    style={{
                        marginTop: moderateScale(7),
                        color: "#EADEB3",
                        fontSize: moderateScale(15),
                    }}
                >
                    앱 서비스 안내
                </Text>
                <Text
                    style={{
                        color: "#C2AA60",
                        marginTop: moderateScale(5),
                    }}
                >
                    이름 수정을 원하시는 경우 아래 건의함을 통해 요청해 주시기 바랍니다. 단, 현재로서는 반영 가능 여부를 확답드리기 어렵습니다.                
                </Text>
            </View>
        </View>
    );
};

export default Important;