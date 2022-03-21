import React from "react";
import { Colors } from "Constants";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OptionsBox = ({ value, correct, ocheStrator, shape }) => {
  function getColors(lenghtOfColors, anwser) {
    let colors = Array(lenghtOfColors).fill("transparent");
    if (typeof anwser === "number") {
      colors[anwser] = "#f3d801";
    }
    return colors;
  }

  return value.length === 4 ? (
    <View style={{ width: "92%", marginHorizontal: "auto", marginTop: 15 }}>
      {/* option one */}
      <Choice
        aphabet="A"
        choiceNumber={0}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />
      {/* 2nd option */}
      <Choice
        aphabet="B"
        choiceNumber={1}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />
      {/* 3rd 0ption */}
      <Choice
        aphabet="C"
        choiceNumber={2}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />

      {/* forth option */}
      <Choice
        aphabet="D"
        choiceNumber={3}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />
    </View>
  ) : (
    <View style={{ width: "100%" }}>
      {/* 1st option */}
      <Choice
        aphabet="A"
        choiceNumber={0}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />
      {/* 2nd option */}

      <Choice
        aphabet="B"
        choiceNumber={1}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />
      {/* 3rd 0ption */}

      <Choice
        aphabet="C"
        choiceNumber={2}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />
      {/* forth option */}

      <Choice
        aphabet="D"
        choiceNumber={3}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />
      {/* 5th option */}

      <Choice
        aphabet="E"
        choiceNumber={4}
        value={value}
        correct={correct}
        shape={shape}
        ocheStrator={ocheStrator}
        getColors={getColors}
      />
    </View>
  );
};

const Choice = ({
  aphabet,
  choiceNumber,
  value,
  correct,
  shape,
  ocheStrator,
  getColors,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        let newShape = getColors(4, choiceNumber);
        if (correct - 1 === choiceNumber) {
          ocheStrator(1, newShape, choiceNumber);
        } else {
          ocheStrator(0, newShape, choiceNumber);
        }
      }}
      style={styles.option}
    >
      <Shape color={shape[choiceNumber]} size={16} />
      <View style={styles.optionTextView}>
        <Text style={styles.optionTextAlphabet}>{aphabet}</Text>
        <Text style={styles.optionTextValue}>{value[choiceNumber]}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Shape = ({ color, size }) => {
  let border = 0.8;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderColor: "white",
        borderRadius: size,
        backgroundColor: color,
        borderLeftWidth: size - size * border,
        borderBottomWidth: size - size * border,
        borderRightWidth: size - size * border,
        borderTopWidth: size - size * border,
        marginRight: 10,
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  option: {
    maxHeight: 100,
    padding: "2%",
    paddingRight: "2%",
    borderRadius: 12,
    backgroundColor: "#08b9fc",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "whitesmoke",
    borderRadius: 14,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
  },
  optionTextView: {
    borderRadius: 12,
    flexDirection: "row",
    width: "100%",
  },
  optionTextAlphabet: {
    justifyContent: "space-around",
    textWrap: "wrap",
    color: Colors.primary,
    marginRight: 5,
    marginVertical: "auto",
  },
  optionTextValue: {
    color: "black",
    justifyContent: "space-around",
    textWrap: "wrap",
    padding: 8,
  },
});

export default OptionsBox;
