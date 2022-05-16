import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Text,
  Linking,
  ImageBackground,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { McTabIcon } from "Components";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} />
      <DrawerContentScrollView style={{ flex: 1 }} {...props}>
        <ImageBackground
          source={require("../../../assets/images/blue.png")}
          style={styles.sideMenuBackgroundImage}
        >
          <McImage
            source={require("../../../assets/user.jpg")}
            style={styles.userPhoto}
          />
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "whitesmoke",
              fontWeight: 700,
              fontStyle: "roboto mediun",
            }}
          >
            Friday candour
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: "whitesmoke",
              fontWeight: 700,
              fontStyle: "roboto regular",
            }}
          >
            Average Quiz Score : 67% total
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
          <Ionicons color="#3490f3" name="globe" size={22} />
          <Text
            style={{ marginLeft: 10 }}
            onPress={() => {
              Linking.openURL("https://Business Unihub.blogspot.com/");
            }}
          >
            Support
          </Text>
        </View>
        <View style={styles.customItem}>
          <Ionicons color="#3490f3" name="star-outline" size={22} />
          <Text
            style={{ marginLeft: 10 }}
            onPress={() => {
              Linking.openURL("https://Business Unihub.blogspot.com/");
            }}
          >
            Rate Unihub
          </Text>
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          flexDirection: "column",
          width: "100%",
          padding: 10,
          borderTopWidth: 2,
          borderTopColor: "blue",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "40%",
          }}
        >
          <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
            settings
          </Text>
          <McTabIcon
            icon={require("../../../assets/images/switches.svg")}
            color="#3490f3" //"#A0A3BD"}
            size={22}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const McImage = styled.Image`
  border: 3px grey solid;
`;

const styles = StyleSheet.create({
  sideMenuBackgroundImage: {
    resizeMode: "center",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    padding: 20,
    top: -5,
    minHeight: 220,
  },
  userPhoto: {
    width: 90,
    height: 90,
    borderRadius: 45,
    margin: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;
