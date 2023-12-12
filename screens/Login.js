import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, View, navigation } from "react-native";
import CustomButton, { ButtonType } from "../components/CustomButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function LoginScreen({ route, navigation }) {
    
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Username:</Text>
        <TextInput value={ name } style={styles.input} placeholder="Enter your name" onChangeText={ setName } />
      </View>
      
      <View style={styles.container}>
        <Text style={styles.text}>Date of Birth:</Text>
      </View>

      <View style={styles.dateContainer}>
        <RNDateTimePicker value={date} onChange={onChangeDate} />
      </View>

      <View style={styles.buttonContainer}>
      <CustomButton
      title="Login"
      type="primary"
      onPress={() => {
      navigation.navigate("Diary", {
      name: name
        });
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
  dateContainer: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    flex: 10,
  },
  container: {
    flex:1,
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