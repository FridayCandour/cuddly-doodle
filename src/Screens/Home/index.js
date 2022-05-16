import React, { useState, useEffect } from "react";
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
import { fetcher, uuidSuper } from "../../experiment.js";

const Home = ({ navigation }) => {
  // FIXME: here i will get admin credentials and pass it downwards
  const [save, saver] = useState(null);
  const [data, datar] = useState(null);
  useEffect(() => {
    // i should retrieve the cre from storage here
    saver({
      name: "friday",
      email: "fridaymichaels662@gmail.com",
      password: "uiedbooker662",
      yeah_that_freaking_thing: true,
      title: "",
    });
  }, []);

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
        <StatisticsGamificationBar data={data} />

        <TouchableOpacity
          style={styles.btn}
          onPress={async () => {
            const domain = await fetcher(
              "http://localhost:3000/admin/stat",
              "POST",
              {},
              save
            );
            if (domain.data) {
              datar(make(domain.data.data));
            }
          }}
        >
          <Texti color="white">Reload</Texti>
        </TouchableOpacity>
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

const StatisticsGamificationBar = ({ data }) => {
  if (!data) {
    //    data = useful;
  }
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
        data={data}
        contentContainerStyle={{
          backgroundColor: "#4dccc6",
          marginTop: 12,
          borderRadius: 20,
          marginBottom: 20,
          padding: 10,
          paddingVertical: 20,
          margin: "auto",
          width: "97.8%",
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
    minWidth: 200,
    maxHeight: 100,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#08b9fc",
    margin: "auto",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
// #A0A3BD

export default Home;
