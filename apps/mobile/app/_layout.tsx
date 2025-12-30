import React, { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import CustomSplashScreen from "../components/SplashScreen";
import "../global.css";

// Prevent the native splash from auto-hiding until we decide
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // Simulate any initial data loading / font loading here
    const prepare = async () => {
      // Add any async prep work here (fonts, async storage check, etc.)
      setAppIsReady(true);
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && !showSplash) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, showSplash]);

  // Show custom splash screen while app is preparing or splash is visible
  if (!appIsReady || showSplash) {
    return <CustomSplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen 
          name="pathway/[id]" 
          options={{ 
            headerShown: false,
            presentation: "modal",
            animation: "slide_from_right"
          }} 
        />
      </Stack>
    </View>
  );
}
