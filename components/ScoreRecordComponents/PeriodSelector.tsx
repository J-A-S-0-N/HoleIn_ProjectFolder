import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  value: number;
  onChange: (next: number) => void;
};

export default function PeriodSelector({ value, onChange }: Props) {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => onChange(0)}
        style={[
          styles.shadowButton,
          {
            borderRadius: 10,
            backgroundColor: value === 0 ? '#009966' : '#18181B',
            paddingVertical: 12,
            paddingHorizontal: 47,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Text
          style={{
            color: value === 0 ? 'white' : '#9F9FA9',
            fontSize: 17,
            fontWeight: value === 0 ? '700' : '300',
          }}
        >
          주간
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onChange(1)}
        style={[
          styles.shadowButton,
          {
            borderRadius: 10,
            backgroundColor: value === 1 ? '#009966' : '#18181B',
            paddingVertical: 12,
            paddingHorizontal: 47,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Text
          style={{
            color: value === 1 ? 'white' : '#9F9FA9',
            fontSize: 17,
            fontWeight: value === 1 ? '700' : '300',
          }}
        >
          월간
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onChange(2)}
        style={[
          styles.shadowButton,
          {
            borderRadius: 10,
            backgroundColor: value === 2 ? '#009966' : '#18181B',
            paddingVertical: 12,
            paddingHorizontal: 47,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Text
          style={{
            color: value === 2 ? 'white' : '#9F9FA9',
            fontSize: 17,
            fontWeight: value === 2 ? '700' : '300',
          }}
        >
          연간
        </Text>
      </TouchableOpacity>
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
