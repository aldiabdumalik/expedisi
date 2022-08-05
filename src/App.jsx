import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import useFont from './components/hooks/useFont';
import Router from './router';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        let f = await useFont();
      } catch (e) {
        console.warn(e);
      } finally {
        SetIsReady(true);
      }
    }
    prepare();
  })

  const onLayoutRootView = useCallback(async () => {
    if (IsReady) {
      await SplashScreen.hideAsync();
    }
  }, [IsReady]);

  if (!IsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={() => onLayoutRootView()}>
      <Router />
    </NavigationContainer>
  );
}