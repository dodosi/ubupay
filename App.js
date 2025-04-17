import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroScreen from './src/screens/IntroScreen';
import SignupScreen from './src/screens/SignupScreen';  // your signup screen component
import LoginScreen from './src/screens/LoginScreen'; // your signin screen component
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Reset" component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Intro" component={IntroScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin"
         component={LoginScreen} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
