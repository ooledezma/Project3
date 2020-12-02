import React from 'react';
import ArticleSwipe from './app/screens/ArticleSwipe';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function App() {
	return <ArticleSwipe />;
}

// import { createStackNavigator } from 'react-navigation-stack';
// import LoadingScreen from './app/screens/LoadingScreen';
// import LoginScreen from './app/screens/LoginScreen';
// import RegisterScreen from './app/screens/RegisterScreen';
// import HomeScreen from './app/screens/HomeScreen';
// import SelectCategory from './app/screens/SelectCategory';

// import {
// 	REACT_APP_FIREBASE_KEY,
// 	REACT_APP_DOMAIN,
// 	REACT_APP_DATABASE,
// 	REACT_APP_PROJECT_ID,
// 	REACT_APP_STORAGE_BUCKET,
// 	REACT_APP_SENDER_ID,
// 	REACT_APP_ID,
// 	REACT_MEASUREMENT_ID,
// } from 'react-native-dotenv';
// import * as firebase from 'firebase';

// var firebaseConfig = {
// 	apiKey: REACT_APP_FIREBASE_KEY,
// 	authDomain: REACT_APP_DOMAIN,
// 	databaseURL: REACT_APP_DATABASE,
// 	projectId: REACT_APP_PROJECT_ID,
// 	storageBucket: REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: REACT_APP_SENDER_ID,
// 	appId: REACT_APP_ID,
// 	measurementId: REACT_MEASUREMENT_ID,
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const Appstack = createStackNavigator({
// 	Home: HomeScreen,
// });

// const AuthStack = createStackNavigator({
// 	Login: LoginScreen,
// 	Register: RegisterScreen,
// });

// export default createAppContainer(
// 	createSwitchNavigator(
// 		{
// 			Loading: LoadingScreen,
// 			App: Appstack,
// 			Auth: AuthStack,
// 		},
// 		{
// 			initialRouteName: 'Loading',
// 		}
// 	)
// );
