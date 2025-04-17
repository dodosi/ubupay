import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Make sure this import is correct

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const LoginScreen = () => {
   const navigation = useNavigation(); 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/mylogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.header}>Sign in</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity style={styles.forgotButton}  onPress={() => navigation.navigate('Reset')}>

          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>OR sign in with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../assets/images/google.jpeg')} 
              style={styles.socialLogo}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../assets/images/linkedin.png')} 
              style={styles.socialLogo}
            />
          </TouchableOpacity>
        </View>

   
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't you have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
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
  logoContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 150,
  },
  formContainer: {
    width: '100%',
    height: '70%',
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
    color: '#333',
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
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 25,
    fontSize: 20,
  },
  forgotText: {
    color: '#e38717',
    fontSize: 14,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#2d5dbd',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 14,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
  socialIcon: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 10,
  },
  socialLogo: {
    width: 30,
    height: 30,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#333',
  },
  signupLink: {
    fontSize: 16,
    color: '#e38717',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
