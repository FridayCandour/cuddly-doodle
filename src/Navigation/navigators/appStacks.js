import "react-native-gesture-handler";
import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  More,
  Market,
  Explore,
  Standings,
  ClassRoom,
  quizScreen,
  Registration,
  ArticleDetail,
} from "Screens";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={require("../../../assets/icon.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export function ExploreScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          title: "Explore Page", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="ClassRoom"
        component={ClassRoom}
        options={{
          headerShown: true,
          title: "your class room",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Standings"
        component={Standings}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ArticleDetail"
        component={ArticleDetail}
        options={{
          headerShown: true,
          title: "Tekkxe English post",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

export function StandingsScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Standings"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="Standings"
        component={Standings}
        options={{
          title: "Standings Page", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

export function MarketScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Market">
      <Stack.Screen
        name="Market"
        component={Market}
        options={{
          title: "Market Page", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
