import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { Images } from "Constants";
import { McTabIcon } from "../../Components";
import { fetcher } from "../../experiment.js";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-web";
const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};

const Login = ({ navigation }) => {
  // managing state
  const [screen, setScreen] = useState({ login: "none", reg: "none" });
  const [save, saver] = useState({
    name: null,
    email: null,
    password: null,
  });

  // send the request to the backend
  function send() {
    return async () => {
      const request = await fetcher("/admin/register", "POST", {}, save);
      const admin = await request.data;
      if (admin.status === 201) {
        await storeData("admin", admin);
        setScreen({ login: "flex", reg: "none" });
      } else {
        Alert(admin.data + "  and  " + admin.message);
      }
    };
  }
  return (
    <Container>
      <ScrollView>
        <Header navigation={navigation} />
        <Comp setScreen={setScreen} />
        <LoginComp
          screen={screen}
          setScreen={setScreen}
          navigation={navigation}
        />
        <RegComp
          send={send}
          screen={screen}
          setScreen={setScreen}
          save={save}
          saver={saver}
        />
      </ScrollView>
    </Container>
  );
};

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        maxHeight: 70,
        minHeight: 60,
        width: "100%",
        height: "50%",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#4dccc6",
        justifyContent: "space-between",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 700,
            fontSize: 24,
            marginLeft: 16,
          }}
        >
          Unihub Admin
        </Text>
      </View>
      <Image
        source={require("../../../assets/icon.png")}
        style={{
          width: 55,
          height: 55,
          marginRight: 10,
        }}
      />
    </View>
  );
};

const Comp = ({ setScreen }) => {
  return (
    <View style={styles.Comp}>
      <View
        style={{
          marginHorizontal: "auto",
          flexDirection: "column",
          marginVertical: 140,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            height: 196,
            width: 182,
            marginBottom: 25,
          }}
          source={require("../../../assets/images/xp-level.svg")}
        />
        <Texti size={16}>The Journey to Greatness Starts here</Texti>
      </View>
      <View
        style={{
          // borderColor: "red",
          // borderTopWidth: 2,
          // borderLeftWidth: 2,
          // borderRightWidth: 2,
          // borderBottomWidth: 2,
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#4dccc6",
            minWidth: 100,
            padding: 10,
            margin: 10,
            color: "#e0e5ec",
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={() => {
            setScreen({ login: "none", reg: "flex" });
          }}
        >
          <Texti>Register</Texti>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#4dccc6",
            minWidth: 100,
            margin: 10,
            padding: 10,
            color: "#e0e5ec",
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={() => {
            setScreen({ login: "flex", reg: "none" });
          }}
        >
          <Texti>Continue to app</Texti>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LoginComp = ({ navigation, screen, setScreen }) => {
  return (
    <View
      style={{
        display: screen.login,
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#e0e5ec",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Texti size={16}>Continue to Unihub Admin?</Texti>
      <Button
        onPress={() => {
          navigation.navigate("Tabs");
        }}
        title="Hmmm yeah"
      ></Button>
      <Button
        title="Nope not now"
        onPress={() => {
          setScreen({ login: "none", reg: "none" });
        }}
      />
    </View>
  );
};
const RegComp = ({ send, save, saver, screen, setScreen }) => {
  return (
    <View
      style={{
        display: screen.reg,
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#e0e5ec",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Texti size={16}>Register to Unihub</Texti>
      <Input placeholder="your name" saver={saver} save={save} field="name" />
      <Input placeholder="your email" saver={saver} save={save} field="email" />
      <Input
        placeholder="your password"
        saver={saver}
        save={save}
        field="password"
      />
      <Button
        onPress={() => {
          const go = send();
          if (go) {
            setScreen({ login: "flex", reg: "none" });
          }
        }}
        title="Register"
      />
      <Button
        title="back"
        onPress={() => {
          setScreen({ login: "none", reg: "none" });
        }}
      />
    </View>
  );
};
const Input = ({ placeholder, saver, save, field }) => {
  return (
    <TextInput
      onChange={(e) => {
        let newSave = save;
        newSave[field] = e.nativeEvent.text;
        saver(newSave);
      }}
      style={{
        minHeight: 40,
        minWidth: 260,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 4,
        borderLeftWidth: 2,
        width: "80%",
        marginLeft: 10,
        backgroundColor: "#dde1e7",
        borderColor: "whitesmoke",
        marginBottom: 10,
        borderRadius: 12,
        color: "#656669",
        fontSize: 16,
        textAlign: "left",
        paddingLeft: 10,
      }}
      placeholder={placeholder}
      placeholderTextColor="#656669"
    />
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e0e5ec;
`;

const Text = styled.Text`
  font-size: ${({ size }) => size}px;
  font-weight: 900;
  line-height: 20px;
`;

const Texti = styled.Text`
  font-size: ${({ size }) => size}px;
  font-weight: 900;
  line-height: 14px;
  color: #3448c5;
`;
const McImage = styled.Image`
  border: 3px grey solid;
`;

const styles = StyleSheet.create({
  Comp: {
    width: windowWidth,
    minHeight: windowHeight,
    flex: 1,
    // borderColor: "red",
    // borderTopWidth: 2,
    // borderLeftWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
  },
  tag: {
    marginTop: 12,
    alignItems: "stretch",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 4,
    borderRadius: 30,
    backgroundColor: "#736f84",
    justifyContent: "center",
    alignItems: "center",
  },
  course: {
    marginTop: 18,
    width: "100%",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    margin: "auto",
    borderRadius: 14,
    padding: 8,
    backgroundColor: "#A0A3BD",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
