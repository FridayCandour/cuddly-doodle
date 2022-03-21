import React from "react";
import Tabs from "./Tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const TabStacks = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default TabStacks;
