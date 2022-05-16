import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { McTabIcon, McText } from "Components";
import { Images, Colors } from "Constants";
import { Home, profile, ClassRoom, Login } from "Screens";

const Tab = createBottomTabNavigator();

const Tabs = ({ params }) => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          paddingBottom: 5,
          flexDirection: "column",
        },
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: "#A0A3BD",
            alignContent: "center",
            justifyContent: "center",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <McText
              medium
              size={10}
              color={focused ? Colors.white : "#A0A3BD"}
              style={{
                display: focused ? "flex" : "none",
              }}
            >
              Statistics
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.Standings}
              color={focused ? "white" : "#747896"}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ClassRoom"
        component={ClassRoom}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <McText
              medium
              size={10}
              color={focused ? Colors.white : "#A0A3BD"}
              style={{
                display: focused ? "flex" : "none",
              }}
            >
              Work Space
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.Explore}
              color={focused ? "white" : "#747896"}
              size={24}
            />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <McText
              medium
              size={10}
              color={focused ? Colors.white : "#A0A3BD"}
              style={{
                display: focused ? "flex" : "none",
              }}
            >
              website
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.More}
              color={focused ? "white" : "#747896"}
              size={24}
            />
          ),
        }}
      /> */}

      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <McText
              medium
              size={10}
              color={focused ? Colors.white : "#A0A3BD"}
              style={{
                display: focused ? "flex" : "none",
              }}
            >
              Settings
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.stats}
              color={focused ? "white" : "#747896"}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
