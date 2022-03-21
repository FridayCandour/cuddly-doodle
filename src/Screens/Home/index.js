import React, { useState } from "react";
import { McText, McImage, McTabIcon } from "Components";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Switch,
  Button,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import styled, { useTheme } from "styled-components/native";

const stats = {
  allUsers: "1000000000000000000",
  allAdvertisers: "1000000000000000000",
  paidUsers: "1000000000000000000",
  unPaidUsers: "1000000000000000000",
  allDomain: "1000000000000000000",
  allCourses: "1000000000000000000",
  allResources: "1000000000000000000",
  allAdverts: "1000000000000000000",
  paidAdvert: "1000000000000000000",
  lastToken: "1000000000000000000",
  isTokenActive: true,
  allDiscovery: "1000000000000000000",
  inActiveAdverts: "1000000000000000000",
  liveClass: "1000000000000000000",
  allPost: "1000000000000000000",
  notification: "1000000000000000000",
  activeDiscovery: "1000000000000000000",
};
let useful = [],
  val;
for (const [k, v] of Object.entries(stats)) {
  if (typeof v != "boolean" && v.includes(0)) {
    let zeros = 0;
    for (let i = v.length; i > 0; i--) {
      if (v[i] * 1 === 0) {
        zeros++;
      }
    }
    if (zeros === 18) {
      val = [...v].splice(v.length, 3) + "millions";
    }
  }

  stats[k] = k.toLowerCase();
  if (stats[k].includes("all")) {
    stats[k] = k.split("all");
  }
  val = v;
  if (v === true) {
    val = "yeah!";
  } else if (v === false) {
    val = "nop!";
  }
  useful.push({ name: stats[k], value: val });
}

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Container>
      <ScrollView>
        <Header navigation={navigation} />
        <Header2Section>
          <McText left={16} color="#A0A3BD" semi size={18}>
            Dash Board
          </McText>
          <McTabIcon
            icon={require("../../../assets/images/des.svg")}
            // color={focused ? "white" : "#747896"}
            size={34}
          />
        </Header2Section>
        <StatisticsGamificationBar />
        <Button
          onPress={() => {
            // yeah i will reload stats here
          }}
          title="Reload Statistics"
        />
      </ScrollView>
    </Container>
  );
};

const Header = ({ navigation }) => {
  const [title, setTitle] = useState(" Unihub Administrators ");
  return (
    <View style={styles.topbar}>
      <View
        style={{
          width: "100%",
          height: "60%",
          maxHeight: 160,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 200,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: 22,
              color: "#3490f3",
              marginRight: 22,
            }}
            onPress={() => {
              setTitle("keep the Good work Admin!!!");
            }}
          >
            {title}
          </Text>

          <Ionicons
            onPress={() => {
              navigation.navigate("profile");
            }}
            style={{
              marginRight: 5,
            }}
            color="white"
            name="settings-outline"
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StatisticsGamificationBar = () => {
  // const [title, setTitle] = useState(" Unihub Administrators ");
  return (
    <TouchableWithoutFeedback
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        flexDirection: "row",
      }}
    >
      <FlatList
        keyExtractor={(i, index) => "_stats" + index}
        showsHorizontalScrollIndicator={false}
        vertical
        data={useful}
        contentContainerStyle={{
          backgroundColor: "grey",
          marginTop: 12,
          paddingVertical: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginBottom: 10,
              margin: "auto",
              width: "90%",
              padding: 4,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
              alignItems: "center",
              justifyContent: "space-between",
              shadowColor: "black",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowRadius: 5,
              shadowOpacity: 0.5,
              elevation: 5,
              borderRadius: 8,
              minHeight: "20%",
              flexDirection: "row",
              paddingHorizontal: 8,
            }}
          >
            <Texti size={14} color="grey">
              {item.name}
            </Texti>
            <Batch>{item.value}</Batch>
          </TouchableOpacity>
        )}
      />
    </TouchableWithoutFeedback>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;
// #08b9fc #747896
const Gam = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 100px;
  padding-top: 17px;
  padding-bottom: 17px;
  margin: auto;
  margin: 5px;
  border-radius: 12px;
  flex-direction: row;
  background-color: #08b9fc;
`;

const Batch = styled.Text`
  background-color: #eeeeee; //#bbc7cc;
  justify-content: center;
  align-items: center;
  padding: 9px;
  font-weight: 800;
  color: grey;
  text-align: center;
  border-radius: 10px;
`;

const Texti = styled.Text`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  text-align: center;
`;
const Header2Section = styled.View`
  margin: 0px auto;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 20px;
  width: 100%;
`;

const styles = StyleSheet.create({
  topbar: {
    paddingVertical: 8,
    width: "100%",
    maxHeight: 160,
    backgroundColor: "#A0A3BD", //"#3490f3",
    flexDirection: "column",
    justifyContent: "center",
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    marginBottom: 12,
  },
  navigation: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  btn: {
    minWidth: 150,
    maxHeight: 100,
    padding: 12,
    borderRadius: 12,
    color: "black",
    backgroundColor: "#08b9fc",
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
// #A0A3BD

export default Home;
