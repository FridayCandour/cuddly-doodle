/** TODO:
 *
 * [x] Title section
 * [x] loading animation
 * [x] top bar navigation
 * [X] content
 * [x] Bottom button navigation
 */

import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StatusBar,
  TextInput,
  Text,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Images, Colors } from "Constants";
import { McText, McImage } from "Components";
import { TouchableOpacity } from "react-native-gesture-handler";

const PublishBook = ({}) => {
  const [save, saver] = useState({
    name: "",
    institution: "",
    phone: "",
    email: "",
  });

  return (
    <Container>
      <StatusBar hidden={true} />
      <ScrollView>
        <View>
          <View
            style={{
              width: "100%",
              paddingTop: 10,
            }}
          >
            <Texti>Publish to Unihub</Texti>
            <Input
              placeholder="Book title "
              saver={saver}
              save={save}
              field="title"
            />

            <Input placeholder="tags " saver={saver} save={save} field="tags" />

            <Input
              placeholder="price"
              saver={saver}
              save={save}
              field="price"
            />

            <Input
              placeholder="upload"
              saver={saver}
              save={save}
              field="upload"
            />

            <Submit
              style={{
                shadowColor: "black",
                elevation: 10,
              }}
              onPress={() => {
                let validated = false;
                for (const data in save) {
                  if (
                    Object.hasOwnProperty.call(save, data) &&
                    save[data] !== ""
                  ) {
                    validated = true;
                    break;
                  } else {
                    validated = false;
                  }
                }
                if (validated) {
                  setLoad(true);
                  console.log("saved");
                }
              }}
            >
              <Text
                style={{
                  color: "#656669",
                  margin: "auto",
                  fontSize: 24,
                  padding: 4,
                }}
              >
                Publish
              </Text>
            </Submit>
          </View>

          <LinearGradient
            colors={["#EAEBFF", "#181829"]}
            start={{ x: 1, y: 0.6 }}
            end={{ x: 1, y: 1 }}
            style={{
              marginTop: "100%",
            }}
          >
            <McText
              size={14}
              color="transparent"
              style={{
                textAlign: "center",
              }}
            >
              ...
            </McText>
          </LinearGradient>
        </View>
      </ScrollView>
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
        minHeight: 50,
        minWidth: 260,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 4,
        borderLeftWidth: 2,
        margin: "auto",
        backgroundColor: "#dde1e7",
        borderColor: "whitesmoke",
        marginBottom: 40,
        borderRadius: 12,
        color: "#656669",
        fontSize: 20,
        textAlign: "left",
        paddingLeft: 20,
      }}
      placeholder={placeholder}
      placeholderTextColor="#656669"
    />
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;
const Submit = styled.TouchableOpacity`
  max-width: 400px;
  min-width: 200px;
  max-height: 50px;
  border-radius: 14px;
  background-color: #dde1e7;
  margin: auto;
`;
const Texti = styled.Text`
  font-size: 22px;
  // color: #dde1e7;
  font-weight: 900;
  margin-bottom: 30px;
  margin-left: 10px;
`;

export default PublishBook;
