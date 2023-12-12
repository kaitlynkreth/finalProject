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
import * as Location from 'expo-location'; 

export default function LocationScreen({ route , navigation }) {
  const { name , date , avatar } = route.params;
  const [city, setCity] = useState(''); // State variable for storing city name
  const [errorMsg, setErrorMsg] = useState(''); // State variable for storing error messages

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      Location.reverseGeocodeAsync(location.coords).then((result) => {
        setCity(result[0].city);
      });
    })();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>What's your location?</Text>
        <Text style={styles.text2}>You must share your location to use this App...</Text>
        {errorMsg ? (
          <Text style={styles.errorMsg}>{errorMsg}</Text>
        ) : (
          <Text style={styles.city}>Your current city: {city}</Text>
        )}
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/pin_icon.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type="primary"
            onPress={() => {
              navigation.navigate("Purpose", {
                city: city, name:name, date:date, avatar: avatar} 
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
      imageContainer: {
        flex: 1,
        alignItems: "center",
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
        marginTop: 50,
        width: 200,
        height: 200,
        padding: 10,
        justifyContent: "center",

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