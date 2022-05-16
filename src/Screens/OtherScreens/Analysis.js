/** TODO:
 *
 * [x] Title section
 * [x] loading animation
 * [x] top bar navigation
 * [X] content
 * [x] Bottom button navigation
 */

import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Images, Colors } from "Constants";
import { McText, McImage } from "Components";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";

const Analysis = ({}) => {
  return (
    <Container>
      <ScrollView>
        <View>
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
              color="white"
              style={{
                textAlign: "center",
              }}
            >
              ...
            </McText>
          </LinearGradient>
        </View>
      </ScrollView>
      {/* Bottom button section */}
      <BottomButton onPress={() => {}}>
        <View style={{ flexDirection: "row" }}>
          <McText size={18} style={{ fontFamily: "Inter-SemiBold" }}>
            Create Button
          </McText>
          <McImage source={Images.Down} style={{ marginLeft: 8 }} />
        </View>
      </BottomButton>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;
const HeaderImage = styled.ImageBackground`
  width: 96%;
  height: 60%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 40px;
  margin: 0px 4%;
`;
const HeaderButtonSection = styled.View`
  margin: 0px 4%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ShareCircle = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 52px;
  padding: 26px;
  background-color: #dcf2f571;
  justify-content: center;
  align-items: center;
`;
const TitleSection = styled.View`
  margin: 54% 16px 0px;
`;
const AuthorSection = styled.View`
  height: 38px;
  margin: 15px 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const BottomButton = styled.TouchableOpacity`
  width: 262px;
  height: 56px;
  border-radius: 27.5px;
  background-color: ${(props) => Colors.background};
  margin: 0px 56px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 22px;
`;

export default Analysis;
