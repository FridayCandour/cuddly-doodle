import React, { useState } from "react";
import { View, Switch, Button, TextInput } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "Themes";

const Profile = ({ navigation }) => {
  const theme = useTheme();
  const [save, saver] = useState({
    name: "",
    password: "",
    email: "",
    token: "",
    session: "",
  });
  return (
    <Container>
      <Title>settings screen</Title>
      <Seperator />
      <View style={{ backgroundColor: "#747896", padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>
          Admin Login Details
        </Text>
        <Input placeholder="name" saver={saver} save={save} field="name" />
        <Input
          placeholder="password"
          saver={saver}
          save={save}
          field="password"
        />
        <Input placeholder="email" saver={saver} save={save} field="email" />
        <Input
          placeholder="access token"
          saver={saver}
          save={save}
          field="token"
        />
        <Input
          placeholder="session token"
          saver={saver}
          save={save}
          field="session"
        />
        <Button
          title="Save Current Logins"
          onPress={() => {
            console.log(save);
          }}
        />
      </View>

      <SwitchSection>
        <Text>Theme Switch</Text>
        <Switch
          value={theme.mode === "dark"}
          onValueChange={(value) => theme.setMode(value ? "dark" : "light")}
          style={{
            marginLeft: 12,
          }}
        />
      </SwitchSection>
    </Container>
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
        shadowColor: "aqua",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 8,
        shadowOpacity: 0.7,
        elevation: 8,
      }}
      placeholder={placeholder}
      placeholderTextColor="#656669"
    />
  );
};

const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;
const Title = styled.Text`
  font-size: 24px;
  margin: 10px;
  color: ${(props) => props.theme.colors.text};
`;
const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  margin-left: 20px;
`;
const SwitchSection = styled.View`
  margin: auto;
  padding: 10px;
  flex-direction: row;
`;
const Seperator = styled.View`
  background-color: #747896;
  width: 96%;
  height: 12px;
  margin: 10px 1% 30px 1%;
  border-radius: 4px;
`;
// #A0A3BD
export default Profile;
