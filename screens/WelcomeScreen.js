import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={require('../assets/istockphoto-886145362-612x612.jpg')} 
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
         <CustomButton title="Create a Free Account" 
            type={ButtonType.PRIMARY} 
            onPress={() => navigation.navigate('Name')}/>
         <CustomButton title="Login" 
            type={ButtonType.SECONDARY} 
            onPress={() => navigation.navigate('Login')} // The onPress prop should be inside the tag
            />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#FFFFFF"
  },
  image: {
    width: 400,
    height: 400,
  },
  buttonContainer: {
    width: "80%",
  },

});
