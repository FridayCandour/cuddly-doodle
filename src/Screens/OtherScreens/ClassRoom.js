import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, ScrollView, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  FormContainer1,
  FormContainer2,
  FormContainer3,
  FormContainer4,
  FormContainer5,
  FormContainer6,
  FormContainer7,
  FormContainer8,
} from "./Registration";
const work = [
  "Domains",
  "Courses",
  "Resources",
  "Notifications",
  "Payments",
  "Advertisers",
  "Users",
  "Posts",
];

const ClassRoom = () => {
  const [view, setView] = useState(0);
  if (view === 0) {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header view={view} setView={setView} />
          <FormContainer1 />
        </ScrollView>
      </Container>
    );
  } else if (view === 1) {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header view={view} setView={setView} />
          <FormContainer2 />
        </ScrollView>
      </Container>
    );
  } else if (view === 2) {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header view={view} setView={setView} />
          <FormContainer3 />
        </ScrollView>
      </Container>
    );
  } else if (view === 3) {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header view={view} setView={setView} />
          <FormContainer8 />
        </ScrollView>
      </Container>
    );
  } else if (view === 4) {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header view={view} setView={setView} />
          <FormContainer4 />
        </ScrollView>
      </Container>
    );
  } else if (view === 5) {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header view={view} setView={setView} />
          <FormContainer5 />
        </ScrollView>
      </Container>
    );
  } else if (view === 6) {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header view={view} setView={setView} />
          <FormContainer6 />
        </ScrollView>
      </Container>
    );
  } else if (view === 7) {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header view={view} setView={setView} />
          <FormContainer7 />
        </ScrollView>
      </Container>
    );
  }
};

const Header = ({ course, view, setView }) => {
  return (
    <View
      style={{
        paddingTop: 5,
        width: "100%",
        maxHeight: 140,
        backgroundColor: "#A0A3BD", //"#3490f3",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "40%",
          maxHeight: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            margin: "auto",
          }}
        >
          <Text
            style={{
              fontWeight: 900,
              fontSize: 26,
              margin: 3,
              color: "#3490f3",
            }}
          >
            Unihub
          </Text>
          <Text
            style={{
              color: "whitesmoke",
              fontWeight: 500,
              fontSize: 24,
              margin: 3,
            }}
          >
            work space
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#3490f3",
            fontWeight: 600,
            fontSize: 20,
            margin: 5,
          }}
        >
          {course}
        </Text>
      </View>
      <TopNavigationBar view={view} setView={setView} />
    </View>
  );
};

const TopNavigationBar = ({ view, setView }) => {
  return (
    <View
      style={{
        width: "100%",
        alignContent: "center",
        flexDirection: "row",
      }}
    >
      <FlatList
        keyExtractor={(item, index) => "space" + index}
        horizontal
        showsHorizontalScrollIndicator={true}
        data={work}
        renderItem={({ item, index }) => (
          <Gam
            onPress={() => {
              setView(index);
            }}
            style={{
              backgroundColor: view === index ? "#3490f3" : "#747896",
            }}
          >
            <Text
              style={{
                color: "whitesmoke",
                fontWeight: 800,
                fontSize: 13,
                margin: 6,
              }}
            >
              {item}
            </Text>
          </Gam>
        )}
      />
    </View>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

// #A0A3BD
// #08b9fc
const Gam = styled.TouchableOpacity`
  background-color: #747896;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100px;
  padding-top: 17px;
  padding-bottom: 17px;
  margin: auto;
  margin: 5px;
  border-radius: 12px;
  flex-direction: row;
`;

export default ClassRoom;

// borderColor: "red",
// borderTopWidth: 2,
// borderLeftWidth: 2,
// borderRightWidth: 2,
// borderBottomWidth: 2,
