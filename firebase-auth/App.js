import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignupForm';
import SignInForm from './components/SignInForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpForm />
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
