import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Platform, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  // 웹 환경에서 html, body, #root의 높이를 강제로 100%로 설정
  useEffect(() => {
    if (Platform.OS === 'web') {
      const style = document.createElement('style');
      style.textContent = `
        html, body, #root {
          height: 100% !important;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          background-color: #f1f5f9;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#f1f5f9',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
});