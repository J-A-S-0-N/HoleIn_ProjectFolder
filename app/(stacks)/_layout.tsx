import { Stack } from 'expo-router';

export default function StacksLayout() {
  return (
    <Stack>
      <Stack.Screen name="camera" options={{ headerShown: false, animation: "none"}} />
      <Stack.Screen name="preCameraLoadingScreen" options={{headerShown: false, animation: "fade"}} />
    </Stack>
  );
}
