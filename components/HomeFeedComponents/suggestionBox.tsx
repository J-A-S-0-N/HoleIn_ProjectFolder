import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const SuggestionBox = () => {
    const [text, setText] = useState("");
    return (
        <View
            style={{
                backgroundColor: "#18181B",
                flex:1,
                borderWidth: 1,
                borderColor: "#27272A",
                padding: 10,
                borderRadius: 10,
                marginHorizontal: 15,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    //justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                    gap: moderateScale(10),
                }}
            >
                <Text
                    style={{
                        fontSize: moderateScale(19),
                        color: "white",
                    }}
                >건의함</Text>
                <Ionicons name="mail-open-outline" size={moderateScale(25)} color="#575757" />
            </View>
            {/*sepeartor*/}
            <View
                style={{
                    height: 0.5,
                    backgroundColor: "#7b7b7bff",
                }}
            />
            <View
                style={{
                    marginTop: 10,
                }}
            >
                <Text
                    style={{
                        color: "#aaaaaaff",
                    }}
                >필요하신 기능이나 버그 등이 있으면 건의해주세요!</Text>
            </View>
            <TextInput
                multiline
                placeholder="건의 내용을 입력해주세요..."
                placeholderTextColor="#aaaaaaff"
                style={{
                    fontSize: moderateScale(16),
                    padding: 10,
                    height: moderateScale(80),
                    borderWidth: 1,
                    borderColor: "#27272A",
                    backgroundColor: "#202023",
                    borderRadius: 10,
                    marginTop: 10,
                    color: "white",
                }}
                onChangeText={setText}
            />
            <TouchableOpacity
                onPress={() => {
                    //handleSubmit(text)
                }}
                style={{
                    marginTop: 10,
                    padding: 10,
                    //backgroundColor: colors.moreButton,
                    backgroundColor: "#00b27769",
                    borderRadius: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: moderateScale(16),
                        fontWeight: "900",
                        color: "white",
                    }}
                >
                    보내기
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default SuggestionBox;