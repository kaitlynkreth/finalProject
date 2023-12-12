import { Button } from "react-native-elements";
import CustomButton, { ButtonType } from "../components/CustomButton";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";


export default function FinalProfileScreen({ route, navigation }) {
const { name, date, avatar, city, purpose } = route.params;
console.log(route.params);
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.topContainer}>
        <Text style = {styles.text}> 
         Name: {name}
        </Text>

        <View style = {styles.image}>
        <Image source={avatar} style={styles.image} />
        </View>

        <Text style ={styles.text2}>Date of Birth: {date ? date.toLocaleDateString() : 'N/A'}</Text>
        <Text style ={styles.text2}>Location: {city}</Text>
        <Text style ={styles.text2}>Goal: {purpose}</Text>  
       

      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Complete Profile"
          type="primary"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
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
  buttonContainer: {
    width: "80%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    // margin: 10,
  },
  text2: {
    fontSize: 15,
    marginBottom: 16,
    color: "#FFFFFF",
    // margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});