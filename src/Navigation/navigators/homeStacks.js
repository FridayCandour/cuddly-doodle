import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Registration, ArticleDetail, ClassRoom, Explore } from "Screens";

const Stack = createStackNavigator();

const Hometacks = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={Explore}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ClassRoom"
      component={ClassRoom}
      options={{
        headerShown: true,
        title: "Business Unihub",
        headerTitleAlign: "center",
      }}
    />

    <Stack.Screen
      name="ArticleDetail"
      component={ArticleDetail}
      options={{
        headerShown: true,
        title: "Business Unihub",
        headerTitleStyle: {
          borderBottomWidth: 2,
          paddingHorizontal: 30,
          borderColor: "grey",
          borderRadius: 8,
        },
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name="Registration"
      component={Registration}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Hometacks;
