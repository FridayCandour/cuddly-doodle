import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme, lightTheme, darkTheme } from "Themes";
import TabStacks from "./TabStacks";
import LoginScreenStack from "./LoginScreenStack";

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return false;
  }
};

export default function AppNavigator() {
  const theme = useTheme();
  const [next, setNext] = useState(null);

  useEffect(async () => {
    const go = await getData("admin");
    if (go) {
      setNext(true);
    } else {
      setNext(false);
    }
  });

  return (
    <NavigationContainer theme={theme.mode === "dark" ? darkTheme : lightTheme}>
      <TabStacks />
    </NavigationContainer>
  );
  // return next === true ? (
  //   <NavigationContainer theme={theme.mode === "dark" ? darkTheme : lightTheme}>
  //     <TabStacks />
  //   </NavigationContainer>
  // ) : (
  //   <NavigationContainer theme={theme.mode === "dark" ? darkTheme : lightTheme}>
  //     <LoginScreenStack />
  //   </NavigationContainer>
  // );
}
