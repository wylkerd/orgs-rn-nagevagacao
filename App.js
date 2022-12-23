import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { AppProvider } from './src/hooks';
import AppRotas from './src/routes/AppRotas';

export default function App() {

  return (
    <AppProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <AppRotas />
      </SafeAreaView>
    </AppProvider>
  )
}