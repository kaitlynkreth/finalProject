import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton, { ButtonType } from "../components/CustomButton";


export default function PurposeScreen({ route , navigation }) {
const { name , date , avatar, city } = route.params;
const [purpose, setPurpose] = useState('');
const handlePress = (newPurpose) => {
    setPurpose(newPurpose);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>What Purpose Best Fits Your Diary Aspirations?</Text>
        <Text style={styles.text2}>Select your purpose to direct your goals!</Text>
       
        <View style={styles.buttonContainer}>
        <CustomButton
          title="Scheduling"
          type={purpose === "Scheduling" ? "primary" : "secondary"}
          onPress={() => handlePress("Scheduling")}
        />
        <CustomButton
          title="Personal Journal"
          type={purpose === "Personal Journal" ? "primary" : "secondary"}
          onPress={() => handlePress("Personal Journal")}
        />
        <CustomButton
          title="Academic"
          type={purpose === "Academic" ? "primary" : "secondary"}
          onPress={() => handlePress("Academic")}
        />
      </View>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type="primary"
          onPress={() => {
            navigation.navigate("FinalProfile", {
              purpose: purpose, name:name, date:date,
              avatar:avatar, city:city}
              );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    topContainer: {
        padding: 16,
      },
      container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#FFFFFF",
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
        color: "#808080",
        // margin: 10,
      },
      image: {
        width: 100,
        height: 100,
      },
      city: {
        fontSize: 15,
        marginBottom: 16,
        color: "#808080",
      },
      input: {
        fontSize: 20,
        padding: 16,
        borderColor: "#BBBBBB",
        borderWidth: 1,
        borderRadius: 8,
      },
      buttonContainer: {
        paddingHorizontal: 16,
        marginBottom: 24,
      },
});