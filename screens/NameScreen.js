import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, View, navigation } from "react-native";
import CustomButton, { ButtonType } from "../components/CustomButton";

export default function NameScreen({ navigation }) {
    
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>What's your name?</Text>
        <TextInput value={ name } style={styles.input} placeholder="Enter your name" onChangeText={ setName } />
      </View>
      <View style={styles.buttonContainer}>
      <CustomButton
      title="Next"
      type="primary"
      onPress={() => {
      navigation.navigate("DateOfBirth", {
      name: name,
        });
      }}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    // alignItems: "center",
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