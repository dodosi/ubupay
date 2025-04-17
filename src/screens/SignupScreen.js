import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Make sure this import is correct
import CheckBox from '@react-native-community/checkbox';
const SignupScreen = () => {
  const navigation = useNavigation(); // Use the navigation hook

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/mylogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Signup Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.header}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <View style={styles.signinContainer}>
        <CheckBox
          value={true}
          disabled={true}
          tintColors={{ true: '#000', false: '#888' }}
        />
        <Text style={styles.termsText}>
          By creating an account you agree to our{' '}
          <Text style={styles.linkText}>Terms and Conditions</Text>
        </Text>
       </View>
  

 

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>OR sign up with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Login */}
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

        {/* Already have an account */}
        <View style={styles.signinContainer}>
     
          <Text style={styles.signinText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.signinLink}>Sign in</Text>
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
  termsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    fontSize: 16,
    color: '#e38717',
    fontWeight: 'bold',
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#2d5dbd',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 25,
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
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
  socialIcon: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
  },
  socialLogo: {
    width: 30,
    height: 30,
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft:20
  },
  signinText: {
    color: '#888',
    fontSize: 16,
  },
  signinLink: {
    fontSize: 16,
    color: '#e38717',
    fontWeight: 'bold',
  },
});


export default SignupScreen;
