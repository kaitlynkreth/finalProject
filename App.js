import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import NameScreen from './screens/NameScreen';
import DateOfBirthScreen from './screens/DateOfBirth';
import ProfilePictureScreen from './screens/ProfilePicture';
import LocationScreen from './screens/Location';
import PurposeScreen from './screens/Purpose';
import FinalProfileScreen from './screens/FinalProfile';
import LoginScreen from './screens/Login';
import DiaryScreen from './screens/Diary';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
const Stack = createStackNavigator();

export default function App() {
  return (
    <ActionSheetProvider> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="DateOfBirth" component={DateOfBirthScreen} />
        <Stack.Screen name="ProfilePicture" component={ProfilePictureScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Purpose" component={PurposeScreen} />
        <Stack.Screen name="FinalProfile" component={FinalProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Diary" component={DiaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
