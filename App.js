import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './app/screens/LoadingScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import HomeScreen from './app/screens/HomeScreen';

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBoXdqpSZ0OLcVCXmd_5UAvm52oNWE5gwo",
  authDomain: "project3-e3201.firebaseapp.com",
  databaseURL: "https://project3-e3201.firebaseio.com",
  projectId: "project3-e3201",
  storageBucket: "project3-e3201.appspot.com",
  messagingSenderId: "923299188804",
  appId: "1:923299188804:web:5f96df3bd454c8ec87ec11",
  measurementId: "G-57TZHMWD9R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Appstack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: Appstack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)