import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "Screens";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

function LoginScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default LoginScreenStack;
