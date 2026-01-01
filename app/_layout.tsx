import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { UserProvider } from '@/contexts/UserContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { View, StyleSheet, Platform } from 'react-native';          

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <UserProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={styles.root}>   
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(stacks)" options={{ headerShown: false}} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: false }} />
          </Stack>
          {Platform.OS === 'android' && (
            <View pointerEvents="none" style={styles.washedOverlay} />
          )}
        </View>
        <StatusBar style="light" />
      </ThemeProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  washedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#8d8d8dff',
    opacity: 0.06,
  },
});