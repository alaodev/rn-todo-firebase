import React, { useEffect, useState } from "react";

import { 
  FlatList,
  Text, 
  TouchableOpacity, 
  View 
} from "react-native";

import TaskItem from "../../components/TaskItem";

import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

export default Tasks = ({ navigation })  => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const fetchTasks = () => {
      try {
        const q = query(collection(db, "tasks"));
        onSnapshot(q, (querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
              list.push({ id: doc.id, ...doc.data() });
          });
          setTasks(list);
        });
      } catch (e) {
        console.error(e);
      }
    }

    fetchTasks();

  }, []);

  return (
    <View style={ styles.container }>
      <FlatList
        data={ tasks }
        style={ styles.flatListContainer }
        renderItem={task => <TaskItem task={ task.item } />}
      />
      <TouchableOpacity 
        style={ styles.floatingActionButton }
        onPress={ () => navigation.navigate("NewTask") }
      >
        <Text style={ styles.floatingActionButtonIcon }>
          <FontAwesome 
            name="plus"
            size={ 20 }
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}