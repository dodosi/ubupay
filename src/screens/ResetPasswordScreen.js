import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image, StyleSheet, SafeAreaView } from 'react-native';
import globalStyles from '../assets/globalStyles';
import CheckBox from '@react-native-community/checkbox';
const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      // Reset password logic goes here
      alert('Password reset successfully!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Upper Layer: Logo */}
    <View style={styles.logoContainer}>
           <Image
             source={require('../assets/images/mylogo.png')}
             style={styles.logo}
             resizeMode="contain"
           />
         </View>

      {/* Lower Layer: Reset Password Form */}
      <View style={styles.formContainer}>
        <Text style={styles.header}>Reset Password</Text>

        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
<TouchableOpacity style={globalStyles.signupButton}>
          <Text style={styles.signupButtonText}>Reset Password</Text>
        </TouchableOpacity>
       

        {/* Terms and Conditions */}
        <View style={styles.signinContainer}>
          <CheckBox
            value={true}
            disabled={true}
            tintColors={{ true: '#000', false: '#888' }}
          />
          <Text style={styles.text}>
            By resetting your password, you agree to our{' '}
            <Text style={styles.termsLink}>Terms & Conditions</Text>.
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d5dbd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft:20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  logoContainer: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
  },
  formContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333'
  },

  signupButtonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
    textSize: 30,
    fontSize: 25,
    backgroundColor: '#f9f9f9',
  },
  resetButton: {
    backgroundColor: '#0A84FF',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 25,
    elevation: 3,
    alignSelf: 'center',
  },
  resetText: {
    ccolor: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  termsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#e38717',
  },
  termsLink: {
    color: '#e38717',
    fontWeight: 'bold',
    fonatSize: 16,
  },
});

export default ResetPasswordScreen;
