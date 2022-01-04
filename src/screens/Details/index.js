import React, { useState } from "react";

import { Text, TextInput, View } from "react-native";

import styles from "./styles";

export default Details = ({ navigation, route }) => {

  const [ description, setDescription ] = useState(null);

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
        <Text style={ styles.buttonText }>Save</Text>
      </TouchableOpacity>
    </View>
  );
}