import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tasks from "./src/screens/Tasks";
import NewTask from "./src/screens/NewTask";
import Details from "./src/screens/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen
          component={ Tasks } 
          name="Tasks"
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Screen
          component={ NewTask } 
          name="NewTask"
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Screen
          component={ Details } 
          name="Details"
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}