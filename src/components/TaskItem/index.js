import React from "react";

import {
  Alert,
  Text, 
  ToastAndroid, 
  TouchableOpacity, 
  View 
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

export default TaskItem = ( props ) => {

  const navigation = useNavigation();

  const deleteTask = async (id) => {
    try {
      Alert.alert(
        "Warning!",
        "Do you really want to delete this record?",
        [
          {
            text: "Cancel",
            onPress: () => {
              ToastAndroid.show("Action canceled!", ToastAndroid.SHORT);
            },
            style: "cancel"
          },
          { text: "Yes, delete", onPress: async () => {
            await deleteDoc(doc(db, "tasks", id));
            ToastAndroid.show("Successfully deleted!", ToastAndroid.LONG);
          }}
        ]
      );
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={ styles.container }>
      <TouchableOpacity
        style={ styles.button }
        onPress={() => deleteTask(props.task.id)}
      >
        <FontAwesome
          color="#f92e6a"
          name="star"
          size={ 20 }
        />
      </TouchableOpacity>
      <Text
        style={ styles.text }
        onPress={() => {
          navigation.navigate("NewTask", { task: props.task })
        }}
      >
        { props.task.description }
      </Text>
    </View>
  );
}