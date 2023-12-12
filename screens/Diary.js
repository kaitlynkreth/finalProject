import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    View,
    ScrollView,
    StyleSheet,
    Button,
    KeyboardAvoidingView,
    naviagation,
  } from 'react-native';
import CustomButton, { ButtonType } from "../components/CustomButton";


const DiaryEntry = ({ title, content }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.entryTitle}>{title}</Text>
      <Text style={styles.entryContent}>{content}</Text>
    </View>
  );

export default function DiaryScreen({ route, navigation }) {
  const [entries, setEntries] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const { name } = route.params;

  const addEntry = () => {
    if (newTitle && newContent) {
      setEntries([{ title: newTitle, content: newContent }, ...entries]);
      setNewTitle('');
      setNewContent('');
    } else {
      alert('Please fill out both title and content.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{name}'s Diary</Text>
      
      {/* <View style={styles.buttonContainer3}>
      <CustomButton title="Edit Profile" 
            type={ButtonType.TERTIARY} 
            onPress={() => navigation.navigate('FinalProfile')} // The onPress prop should be inside the tag
            />
      </View> */}
      
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
        <ScrollView style={styles.entriesContainer}>
          {entries.map((entry, index) => (
            <DiaryEntry key={index} title={entry.title} content={entry.content} />
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputTitle}
            placeholder="Entry Title"
            value={newTitle}
            onChangeText={setNewTitle}
          />
          <TextInput
            style={styles.inputContent}
            placeholder="What's on your mind?"
            value={newContent}
            onChangeText={setNewContent}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="New Entry"
          type="primary"
          onPress={addEntry}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  keyboardView: {
    flex: 1,
  },
  entriesContainer: {
    flex: 1,
  },
  entryContainer: {
    backgroundColor: "#fcd2e7",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entryContent: {
    fontSize: 16,
  },
  inputContainer: {
    padding: 20,
    flex: .5,
  },
  inputTitle: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputContent: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top', // Aligns text to the top on Android
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  buttonContainer3: {
    paddingHorizontal: 160,
    marginBottom: 24,
  },
});