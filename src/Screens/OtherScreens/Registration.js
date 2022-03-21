import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native";
import { McText } from "Components";
import axios from "axios";
// localhost:3000/admin/create/domain

/**
 * an axois base fetcher
 * @param url string
 * @param method string
 * @param head object
 * @param data object
 * @returns any
 */

export const fetcher = async (url, method, head, data) => {
  const asis = await axios({
    method: method,
    url: url,
    headers: head,
    data: data,
  }).catch(function (error) {
    const obj = {};
    if (error.response) {
      obj.data = error.response.data;
      obj.status = error.response.status;
      obj.headers = error.response.headers;
    } else if (error.request) {
      obj.request = error.request;
    } else {
      obj.error = error.message;
    }
    return obj;
  });
  return asis;
};

export const FormContainer1 = ({ navigation }) => {
  const [save, saver] = useState({
    title: "",
  });

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Create a Domain
        </McText>
      </Header2Section>
      <Input
        placeholder="Domain title"
        saver={saver}
        save={save}
        field="title"
      />
      <Button
        title="Make request"
        onPress={() => {
          fetcher("localhost:3000/admin/create/domain", "POST", {}, save);
        }}
      />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The domain don't already exists in the database
        </McText>
      </Rules>

      <Seperator />
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Update a Domain
        </McText>
      </Header2Section>

      <Input
        placeholder="Domain title"
        saver={saver}
        save={save}
        field="title"
      />
      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The domain don't already exists in the database
        </McText>
      </Rules>
      <Seperator />
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Delete a Domain
        </McText>
      </Header2Section>
      <Input
        placeholder="Domain title"
        saver={saver}
        save={save}
        field="title"
      />
      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The domain already exists in the database
        </McText>
      </Rules>
    </View>
  );
};

export const FormContainer2 = ({ navigation }) => {
  const [save, saver] = useState({
    title: "",
  });
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Create a course
        </McText>
      </Header2Section>
      <Input
        placeholder="course title"
        saver={saver}
        save={save}
        field="title"
      />
      <Input
        placeholder="course level"
        saver={saver}
        save={save}
        field="level"
      />

      <Input
        placeholder="course welcome text"
        saver={saver}
        save={save}
        field="welcome"
      />

      <Input
        placeholder="upload course thumbnail"
        saver={saver}
        save={save}
        field="thumbnail"
      />

      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The course don't already exists in the database
        </McText>
      </Rules>
      <Seperator />
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Update a course
        </McText>
      </Header2Section>
      <Input
        placeholder="course title"
        saver={saver}
        save={save}
        field="title"
      />
      <Input
        placeholder="course level"
        saver={saver}
        save={save}
        field="level"
      />

      <Input
        placeholder="course welcome text"
        saver={saver}
        save={save}
        field="welcome"
      />

      <Input
        placeholder="upload course thumbnail"
        saver={saver}
        save={save}
        field="thumbnail"
      />
      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The course don't already exists in the database
        </McText>
      </Rules>
      <Seperator />
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Delete a course
        </McText>
      </Header2Section>
      <Input
        placeholder="course title"
        saver={saver}
        save={save}
        field="title"
      />
      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The course already exists in the database
        </McText>
      </Rules>
    </View>
  );
};

export const FormContainer3 = ({ navigation }) => {
  const [save, saver] = useState({
    title: "",
  });
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Create a resource
        </McText>
      </Header2Section>
      <Input
        placeholder="resource title"
        saver={saver}
        save={save}
        field="title"
      />
      <Input
        placeholder="resource type"
        saver={saver}
        save={save}
        field="type"
      />
      <Input
        placeholder="course title"
        saver={saver}
        save={save}
        field="courseTitle"
      />

      <Input
        placeholder="upload resource thumbnail"
        saver={saver}
        save={save}
        field="thumbnail"
      />
      <Input
        placeholder="upload resource "
        saver={saver}
        save={save}
        field="acces"
      />

      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The resource don't already exists in the database
        </McText>
      </Rules>
      <Seperator />
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Update a resource
        </McText>
      </Header2Section>
      <Input
        placeholder="resource title"
        saver={saver}
        save={save}
        field="title"
      />
      <Input
        placeholder="resource type"
        saver={saver}
        save={save}
        field="type"
      />
      <Input
        placeholder="course title"
        saver={saver}
        save={save}
        field="courseTitle"
      />

      <Input
        placeholder="upload resource thumbnail"
        saver={saver}
        save={save}
        field="thumbnail"
      />
      <Input
        placeholder="upload resource "
        saver={saver}
        save={save}
        field="acces"
      />
      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The resource don't already exists in the database
        </McText>
      </Rules>
      <Seperator />
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Delete a resource
        </McText>
      </Header2Section>
      <Input
        placeholder="resource title"
        saver={saver}
        save={save}
        field="title"
      />
      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The resource already exists in the database
        </McText>
      </Rules>
    </View>
  );
};

export const FormContainer4 = ({ navigation }) => {
  const [save, saver] = useState({
    title: "",
  });
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          Delete Post
        </McText>
      </Header2Section>
      <Input placeholder="Post ID" saver={saver} save={save} field="postID" />
      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The resource already exists in the database
        </McText>
      </Rules>
    </View>
  );
};

export const FormContainer5 = ({ navigation }) => {
  const [save, saver] = useState({
    title: "",
  });
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          update user
        </McText>
      </Header2Section>
      <Input placeholder="user email" saver={saver} save={save} field="email" />
      <Input
        placeholder="subscription"
        saver={saver}
        save={save}
        field="subscription"
      />
      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The resource already exists in the database
        </McText>
      </Rules>
    </View>
  );
};

export const FormContainer6 = ({ navigation }) => {
  const [save, saver] = useState({
    title: "",
  });
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          update Advertiser acccount
        </McText>
      </Header2Section>
      <Input placeholder="email" saver={saver} save={save} field="email" />

      <Input
        placeholder="password"
        saver={saver}
        save={save}
        field="password"
      />

      <Button title="Make request" />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The resource already exists in the database
        </McText>
      </Rules>
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

const Header2Section = styled.View`
  margin: 30px 0px 6px auto;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 20px;
  width: 100%;
`;

const Rules = styled.View`
  margin: 10px auto;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  background-color: #dde1e7;
`;

const Seperator = styled.View`
  background-color: #747896;
  width: 96%;
  height: 12px;
  margin: 0px 1% 30px 1%;
  border-radius: 4px;
`;
// #A0A3BD
