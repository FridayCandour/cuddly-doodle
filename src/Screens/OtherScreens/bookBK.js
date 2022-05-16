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

const BookBK = ({}) => {
  return (
    <Container>
      <ScrollView>
        <HeaderImage source={require("Assets/images/blue.png")}></HeaderImage>
        <HeaderButtonSection>
          <ShareCircle>
            <McImage
              // source={require("Assets/images/Share.png")}
              style={{
                width: 37,
                height: 37,
                borderRadius: 32,
              }}
            />
          </ShareCircle>
        </HeaderButtonSection>

        {/* Title section */}
        <TitleSection>
          <McText bold color="white" size={18}>
            The book you should read
          </McText>
        </TitleSection>
        {/* Author section */}
        <AuthorSection>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <McImage
              source={require("Assets/images/user.jpg")}
              style={{
                marginRight: 14,
                width: 37,
                height: 37,
                borderRadius: 32,
              }}
            />

            <View>
              <McText color="black" size={16} style={{ fontFamily: "lexend" }}>
                friday candour
              </McText>
              <McText color="black" size={12} style={{ fontFamily: "lexend" }}>
                {moment(Date()).format("MMMM DD, YYYY")}
              </McText>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <McImage
                source={require("Assets/images/check.svg")}
                style={{ marginRight: 8 }}
              />
              <McText color="black" size={12} style={{ fontFamily: "lexend" }}>
                209399
              </McText>
              <McImage
                source={require("Assets/images/video.svg")}
                style={{ marginRight: 8, marginLeft: 15 }}
              />
              <McText color="black" size={12} style={{ fontFamily: "lexend" }}>
                hello world guys
              </McText>
            </View>
          </View>
        </AuthorSection>
        {/* Article contect section */}
        <View>
          <McText
            size={14}
            color="black"
            style={{
              fontFamily: "lexend",
              lineHeight: 29,
            }}
          >
            hello
          </McText>
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
      {/* <BottomButton onPress={() => {}}>
        <View style={{ flexDirection: "row" }}>
          <McText size={18} style={{ fontFamily: "Inter-SemiBold" }}>
            Read More
          </McText>
          <McImage source={Images.Down} style={{ marginLeft: 8 }} />
        </View>
      </BottomButton> */}
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

export default BookBK;
