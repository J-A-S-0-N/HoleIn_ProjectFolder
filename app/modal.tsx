import { useUser } from '@/contexts/UserContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

export default function ModalScreen() {
  const { username, setUsername } = useUser();
  const [inputValue, setInputValue] = useState(username || '');
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    //TODO: username validation with firestore
    //TODO: save username to firestore
    if (!inputValue.trim()) {
      Alert.alert('오류', '사용자 이름을 입력해주세요.');
      return;
    }

    setIsSaving(true);
    try {
      await setUsername(inputValue.trim());
      Alert.alert('성공', '사용자 이름이 저장되었습니다.', [
        { text: '확인', onPress: () => router.back() }
      ]);
    } catch (error) {
      Alert.alert('오류', '사용자 이름 저장에 실패했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          hitSlop={moderateScale(10)}
        >
          <Ionicons name="close" size={moderateScale(28)} color="#F4F4F5" />
        </Pressable>
        <Text style={styles.headerTitle}>설정</Text>
        <View style={{ width: moderateScale(28) }} />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>사용자 이름</Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="이름을 입력하세요"
            placeholderTextColor="#71717A"
            maxLength={20}
          />
          {username && (
            <Text style={styles.currentUsername}>
              현재 이름: {username}
            </Text>
          )}
        </View>

        <Pressable
          style={[styles.saveButton, isSaving && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={isSaving}
        >
          <Text style={styles.saveButtonText}>
            {isSaving ? '저장 중...' : '저장'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(15),
    borderBottomWidth: 1,
    borderBottomColor: '#27272A',
  },
  headerTitle: {
    color: '#F4F4F5',
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(30),
  },
  section: {
    marginBottom: moderateScale(30),
  },
  label: {
    color: '#F4F4F5',
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginBottom: moderateScale(10),
  },
  input: {
    backgroundColor: '#18181B',
    borderColor: '#27272A',
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(12),
    color: '#F4F4F5',
    fontSize: moderateScale(16),
  },
  currentUsername: {
    color: '#71717A',
    fontSize: moderateScale(14),
    marginTop: moderateScale(8),
  },
  saveButton: {
    backgroundColor: '#3B82F6',
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(14),
    alignItems: 'center',
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
