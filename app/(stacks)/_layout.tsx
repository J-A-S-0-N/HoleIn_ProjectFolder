import { Stack } from 'expo-router';

export default function StacksLayout() {
  return (
    <Stack>
      <Stack.Screen name="camera" options={{ headerShown: false, animation: "none"}} />
      <Stack.Screen name="preCameraLoadingScreen" options={{headerShown: false, animation: "fade"}} />
      <Stack.Screen name="scoreReviewPage" options={{headerShown: false, animation: "fade"}}/>
      <Stack.Screen name="simpleLoadingScreen" options={{headerShown: false, animation: "fade"}}/>
      <Stack.Screen name="loadingRoute2Review" options={{headerShown: false, animation: "fade"}}/>
      <Stack.Screen name="backCamera" options={{headerShown: false, animation: "fade"}} />
      <Stack.Screen name="finalLoadingPage" options={{headerShown: false, animation: "fade"}} />
      <Stack.Screen name="scoreReviewBackNine" options={{headerShown: false, animation: "fade"}} />
    </Stack>
  );
}
