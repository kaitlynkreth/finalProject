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
import { useActionSheet } from '@expo/react-native-action-sheet';
import * as ImagePicker from 'expo-image-picker';

export default function ProfilePictureScreen({ route , navigation }) {
  const { name , date } = route.params;
  console.log(route.params);
  const { showActionSheetWithOptions } = useActionSheet();
        
  const launchLibraryRequested = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need media library permissions to make this work!');
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      return;
    }
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 3],
      });
      if (!result.canceled && result.assets) {
        setAvatar(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error occurred while accessing the media library: ", error);
    }
  };
  
  const launchCameraRequested = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
    }
    try {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 3],
        });
        if (!result.canceled && result.assets) {
            setAvatar(result.assets[0].uri);
        }
    } catch (error) {
        console.log("Error occurred while accessing the camera: ", error);
    }
  };
  
    
    const onPress = () => {
        const options = ['Take Photo', 'Choose from Library', 'Cancel'];
        const cancelButtonIndex = 2;
        showActionSheetWithOptions({
            options,
            cancelButtonIndex,
        }, 
        (buttonIndex) => {
            if (buttonIndex === 0) {
            launchCameraRequested();
            } else if (buttonIndex === 1) {
            launchLibraryRequested();
            }
        });
        };
 

const [avatar, setAvatar] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.topContainer}>
      <Text style={styles.text}>Add a Profile Picture</Text>
        <Text style = {styles.text2}>Add a profile picture! Your profile picture will be visible to everyone. </Text>
      </View>

    <TouchableOpacity style={styles.avatarContainer} onPress={onPress}>
    {avatar ? (
            <Image source={{ uri: avatar }} style={styles.icon} />
          ) : (
        <Image
            source={require("../assets/icon_camera.png")}
            style={styles.icon}
            resizeMode="contain"
        />
    )}
  </TouchableOpacity>

      
  <View style={styles.buttonContainer}>
         <CustomButton title="Next" 
            type={ButtonType.PRIMARY} 
            onPress={() => {
              navigation.navigate("Location", {
                avatar: avatar,name: name, date:date }
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
      avatarContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 10,
        borderRadius: 24,
      },
      icon: {
        margin: 10,
        marginBottom: 40,
        width: 170,
        height: 170,
        borderRadius: 24,
      },
      buttonContainer: {
        paddingHorizontal: 16,
        marginBottom: 24,
      },
});