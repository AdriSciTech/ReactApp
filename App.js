import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { AuthScreen, handleAuthentication } from './AuthScreen.js';
import MainScreen from './MainScreen';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <StatusBar style="auto" />
      {user ? (
        <MainScreen />
      ) : (
        <AuthScreen handleAuthentication={handleAuthentication} setUser={setUser} />
      )}
    </>
  );
}


