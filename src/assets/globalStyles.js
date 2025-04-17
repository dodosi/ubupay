import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007BFF',
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
    width: 10,
    height: 150,
  },
  formContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
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
    height: 50,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 20, // Big text size
    fontWeight: 'bold', // Bold text
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotText: {
    color: "#ebae34",
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#0A84FF',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
    width: '100%',
  },
  loginText: {
    color: '#fff', // White text color
    fontSize: 30, // Larger font size
    fontWeight: 'bold', // Make text bold
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
    fontSize: 18,
    color: '#333',
  },
  signupLink: {
    fontSize: 18,
    color: "#ebae34",
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logoContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  formContainer: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  termsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: "#ebae34",
    textDecorationLine: 'underline',
  },
  signupButton: {
    backgroundColor: '#007BFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
  },
  signinText: {
    color: '#888',
    fontSize: 16,
  },
  signinLink: {
    fontSize: 16,
    color: "#ebae34",
    fontWeight: 'bold',
  },
});

export default globalStyles;
