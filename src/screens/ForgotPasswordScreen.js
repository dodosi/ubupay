import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import globalStyles from '../assets/globalStyles';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    // Send reset email logic here
    console.log('Reset password for', email);
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput style={globalStyles.input} placeholder="Email" onChangeText={setEmail} />
      <Button title="Send Reset Link" onPress={handleReset} style={globalStyles.Button}/>
    </View>
  );
};

export default ForgotPasswordScreen;
