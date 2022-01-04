import React, { useEffect, useState } from "react";

import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

import styles from "./styles";

export default NewTask = ({ navigation, route }) => {

  const [ description, setDescription ] = useState(null);
  const [ editMode, setEditMode ] = useState(false);

  useEffect(() => {
    if (route.params?.task) {
      setEditMode(true);
      setDescription(route.params.task.description);
    }
  }, []);

  const newTask = async () => {
    try {
      if (editMode) {
        await setDoc(doc(db, "tasks", route.params?.task.id), {
          description: description,
          status: false
        });
      } else {
        await addDoc(collection(db, "tasks"), {
          description: description,
          status: false
        });
      }
      navigation.navigate("Tasks");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={ styles.container }>
      <View>
        <Text style={ styles.title }>Description</Text>
        <TextInput 
          placeholder="Ex: Go to school"
          onChangeText={ setDescription }
          style={ styles.input }
          value={ description }
        />
      </View>
      <TouchableOpacity 
        style={ styles.button }
        onPress={() => newTask()}
      >
        <Text style={ styles.buttonText }>
          { editMode ? "Edit" : "Save" }
        </Text>
      </TouchableOpacity>
    </View>
  );
}