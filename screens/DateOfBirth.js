import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import CustomButton, { ButtonType } from "../components/CustomButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function DateOfBirthScreen({ route, navigation }) {
  const { name } = route.params;
  console.log(route.params);


  const [date, setDate] = useState(new Date());
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>What's your date of birth?</Text>
        <RNDateTimePicker value={date} onChange={onChangeDate} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type={ButtonType.PRIMARY}
          onPress={() => {
          navigation.navigate("ProfilePicture", {
            date: date, name:name}
            );
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