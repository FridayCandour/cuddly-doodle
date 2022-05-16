import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, ScrollView, FlatList, StyleSheet, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Images } from "Constants";
import { McTabIcon } from "../../Components";
import axios from "axios";
import cheerio from "react-native-cheerio";
const tags = ["GST", "Poetry", "News", "scholarship", "Phonetics"];

const Standings = ({ navigation }) => {
  async function prepareData(content) {
    const htmlString = await content.data;
    let con = [];
    const $ = cheerio.load(htmlString);
    $("article").map(async (_, article) => {
      const header = $(".entry-header", article);
      const title = $(".entry-title", header);
      const href = $("a", title).attr("href");
      const meta = $(".entry-meta", header);
      const author = $(".entry-author", meta);
      const time = $(".entry-time", meta);
      const image = $("a", $(".entry-summary", article));
      con.push({
        title: title.text(),
        href: href,
        author: $(".author-name", author).text(),
        time: $(".published", time).text(),
        image: $("span", image).data().image,
        text: $("p", $(".entry-summary", article)).text(),
      });
    });
    return con;
  }
  const [content, setContent] = useState(null);
  const [IsOnline, setIsOnline] = useState(true);
  useEffect(async () => {
    try {
      await axios.get("https://tekkxe.blogspot.com").then(async (html) => {
        if (html.data) {
          const data = await prepareData(html);
          setContent(data);
        } else {
          setIsOnline(false);
        }
      });
    } catch (error) {
      setContent([
        {
          title: "No post find...",
          href: "#",
          author: "....",
          time: "...",
          image: "",
          text: "an error occurred, try again...",
        },
      ]);
    }
  }, []);

  return IsOnline && content ? (
    <Container>
      <ScrollView>
        <Header navigation={navigation} />
        <Greetings name="Friday" />
        <Search
          setIsOnline={setIsOnline}
          setContent={setContent}
          prepareData={prepareData}
        />
        <Tags
          tags={tags}
          setIsOnline={setIsOnline}
          setContent={setContent}
          prepareData={prepareData}
        />
        <CourseTitleBar size={16} course="Latest Tekkxe English Posts" />
        <PostContainer navigation={navigation} content={content} />
      </ScrollView>
    </Container>
  ) : (
    <Container>
      <ScrollView>
        <Header navigation={navigation} />
        <Greetings name="Friday" />
        <Search />
        <Tags tags={tags} />
        <CourseTitleBar size={16} course="Latest Tekkxe English Posts" />
        {/* <PostContainer navigation={navigation} content={content} /> */}
      </ScrollView>
    </Container>
  );
};

const Search = ({ setContent, setIsOnline, prepareData }) => {
  return (
    <TouchableOpacity
      style={{
        height: 12,
        marginVertical: 7,
        backgroundColor: "#dde1e7",
        width: "90%",
        height: "80%",
        minHeight: 40,
        minWidth: 100,
        borderRadius: 50,
        margin: "auto",
        borderBottomWidth: 2,
        flexDirection: "row",
        borderBottomColor: "grey",
      }}
    >
      <TextInput
        onChange={async (e) => {
          let text = e.nativeEvent.text.trim();
          try {
            await axios
              .get("https://tekkxe.blogspot.com/search?q=" + text + "&m=1")
              .then(async (html) => {
                console.log(html);
                if (html.data) {
                  const data = await prepareData(html);
                  setContent(data);
                } else {
                  setIsOnline(false);
                }
              });
          } catch (error) {
            setContent([
              {
                title: "No post found for your search",
                href: "#",
                author: "....",
                time: "...",
                image: "",
                text: "Network Error! please try again",
              },
            ]);
          }
        }}
        style={{
          borderColor: "whitesmoke",
          color: "#656669",
          fontSize: 16,
          width: "85%",
          textAlign: "left",
          paddingLeft: 20,
        }}
        placeholder="search post from Business Unihub..."
        placeholderTextColor="#656669"
      ></TextInput>
      <McTabIcon icon={Images.Search} color="#656669" size={34} />
    </TouchableOpacity>
  );
};

const Greetings = ({ name }) => {
  let greatingsArray = ["Welcome back", "Nice to see you", "Happy hunting"],
    greet =
      greatingsArray[Math.round(greatingsArray.length - 1 * Math.random())];
  if (typeof greet === "undefined") {
    greet = greatingsArray[1];
  }
  if (!name) {
    name = greet;
  } else {
    name = greet + " " + name;
  }

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 10,
      }}
    >
      <Text
        style={{
          color: "whitesmoke",
          fontWeight: 900,
          fontSize: 17,
          color: "#656669",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: "whitesmoke",
          fontWeight: 700,
          fontSize: 12,
          color: "#656669",
        }}
      >
        Explore our contents
      </Text>
    </View>
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
        backgroundColor: "blue",
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
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <McTabIcon
            icon={require("../../../assets/menu1.svg")}
            color="white"
            size={22}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 700,
            fontSize: 24,
            marginLeft: 16,
          }}
        >
          Tekkxe English
        </Text>
      </View>
      <Image
        source={require("../../../assets/nicon.png")}
        style={{
          width: 55,
          height: 55,
          marginRight: 10,
        }}
      />
    </View>
  );
};
const CourseTitleBar = ({ course, size }) => {
  return (
    <View style={styles.title}>
      <Text
        size={size}
        style={{
          color: "whitesmoke",
          fontWeight: 500,
        }}
      >
        {course}
      </Text>
    </View>
  );
};

const Tags = ({ tags, setIsOnline, setContent, prepareData }) => {
  return (
    <View style={styles.course}>
      {/* 1st tag */}
      <TouchableOpacity
        onPress={async () => {
          let text = tags[0];
          try {
            await axios
              .get("https://tekkxe.blogspot.com/search?q=" + text + "&m=1")
              .then(async (html) => {
                console.log(html);
                if (html.data) {
                  const data = await prepareData(html);
                  setContent(data);
                } else {
                  setIsOnline(false);
                }
              });
          } catch (error) {
            setContent([
              {
                title: "No post is labeled " + text,
                href: "#",
                author: "....",
                time: "...",
                image: "",
                text: "Network Error! please try again",
              },
            ]);
          }
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[0]}
          </Texti>
        </View>
      </TouchableOpacity>

      {/* 2st tag */}
      <TouchableOpacity
        onPress={async () => {
          let text = tags[1];
          try {
            await axios
              .get("https://tekkxe.blogspot.com/search?q=" + text + "&m=1")
              .then(async (html) => {
                console.log(html);
                if (html.data) {
                  const data = await prepareData(html);
                  setContent(data);
                } else {
                  setIsOnline(false);
                }
              });
          } catch (error) {
            setContent([
              {
                title: "No post is labeled " + text,
                href: "#",
                author: "....",
                time: "...",
                image: "",
                text: "Network Error! please try again",
              },
            ]);
          }
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[1]}
          </Texti>
        </View>
      </TouchableOpacity>

      {/* 3st tag */}
      <TouchableOpacity
        onPress={async () => {
          let text = tags[2];
          try {
            await axios
              .get("https://tekkxe.blogspot.com/search?q=" + text + "&m=1")
              .then(async (html) => {
                console.log(html);
                if (html.data) {
                  const data = await prepareData(html);
                  setContent(data);
                } else {
                  setIsOnline(false);
                }
              });
          } catch (error) {
            setContent([
              {
                title: "No post is labeled " + text,
                href: "#",
                author: "....",
                time: "...",
                image: "",
                text: "Network Error! please try again",
              },
            ]);
          }
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[2]}
          </Texti>
        </View>
      </TouchableOpacity>

      {/* 4st tag */}
      <TouchableOpacity
        onPress={async () => {
          let text = tags[3];
          try {
            await axios
              .get("https://tekkxe.blogspot.com/search?q=" + text + "&m=1")
              .then(async (html) => {
                console.log(html);
                if (html.data) {
                  const data = await prepareData(html);
                  setContent(data);
                } else {
                  setIsOnline(false);
                }
              });
          } catch (error) {
            setContent([
              {
                title: "No post is labeled " + text,
                href: "#",
                author: "....",
                time: "...",
                image: "",
                text: "Network Error! please try again",
              },
            ]);
          }
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[3]}
          </Texti>
        </View>
      </TouchableOpacity>

      {/* 5st tag */}
      <TouchableOpacity
        onPress={async () => {
          let text = tags[4];
          try {
            await axios
              .get("https://tekkxe.blogspot.com/search?q=" + text + "&m=1")
              .then(async (html) => {
                console.log(html);
                if (html.data) {
                  const data = await prepareData(html);
                  setContent(data);
                } else {
                  setIsOnline(false);
                }
              });
          } catch (error) {
            setContent([
              {
                title: "No post is labeled " + text,
                href: "#",
                author: "....",
                time: "...",
                image: "",
                text: "Network Error! please try again",
              },
            ]);
          }
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[4]}
          </Texti>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const NewsItem = ({ item, navigation }) => {
  item.text = item.text.slice(0, 80) + "...";
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ArticleDetail", { selectedQuiz: item });
      }}
      style={{
        width: "96%",
        height: 100,
        marginHorizontal: "auto",
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 5,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        borderRadius: 20,
        shadowRadius: 20,
        shadowOpacity: 0.2,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        source={require("../../../assets/nicon.png")}
        style={{
          width: 105,
          height: 85,
          borderRadius: 20,
          marginRight: 10,
          padding: 10,
        }}
      />

      <View
        style={{
          width: "90%",
          justifyContent: "center",
        }}
      >
        <Text style={{ width: "72%" }} medium size={14} numberOfLines={1}>
          {item.title}
        </Text>
        <Text
          style={{ width: "72%", color: "grey", textWrap: "wrap" }}
          size={12}
        >
          {item.text}
        </Text>
        <Text style={{ width: "72%", color: "grey" }} size={10}>
          author: {item.author} time: {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const PostContainer = ({ navigation, content }) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => uuid.v4()}
        vertical
        showsHorizontalScrollIndicator={false}
        data={content}
        renderItem={({ item }) => (
          <NewsItem navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Text = styled.Text`
  font-size: ${({ size }) => size}px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 900;
  line-height: 20px;
`;

const Texti = styled.Text`
  font-size: ${({ size }) => size}px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  line-height: 14px;
`;
const McImage = styled.Image`
  border: 3px grey solid;
`;

const styles = StyleSheet.create({
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

export default Standings;
