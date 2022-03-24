import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { McText } from "Components";
import { fetcher, uuidSuper } from "../../experiment.js";

const convertToUsefulContent = function (obj) {
  let i = 0;
  let out = [];
  for (const key in obj) {
    i++;
    if (i > 1) {
      if (!out[1]) {
        out[1] = [];
        out[1].push(obj[key]);
        continue;
      } else {
        out[1].push(obj[key]);
        continue;
      }
    }
    out.push(obj[key]);
  }
  return out;
};

const con = (arr) => {
  const sorted = [];
  for (let i = 0; i < arr.length; i++) {
    sorted.push(convertToUsefulContent(arr[i]));
  }
  return sorted;
};

const domains = [
  { title: "maths", course: 10, users: 100 },
  { title: "english", course: 20, users: 100 },
  { title: "history", course: 20, users: 100 },
  { title: "music", course: 20, users: 100 },
  { title: "economics", course: 20, users: 100 },
  { title: "physics", course: 20, users: 100 },
  { title: "magic", course: 20, users: 100 },
  { title: "maths", course: 10, users: 100 },
  { title: "english", course: 20, users: 100 },
];
const courses = [
  { title: "maths", domain: "maths", reources: 100 },
  { title: "english", domain: "english", reources: 100 },
  { title: "history", domain: "history", reources: 100 },
  { title: "music", domain: "music", reources: 100 },
  { title: "economics", domain: "economics", reources: 100 },
  { title: "physics", domain: "physics", reources: 100 },
  { title: "magic", domain: "magic", reources: 100 },
  { title: "maths", domain: "maths", reources: 100 },
  { title: "english", domain: "english", reources: 100 },
];

const resources = [
  { course: "maths", title: "maths", type: "pdf" },
  { course: "english", title: "english", type: "pdf" },
  { course: "history", title: "history", type: "pdf" },
  { course: "music", title: "music", type: "pdf" },
  { course: "economics", title: "economics", type: "pdf" },
  { course: "physics", title: "physics", type: "pdf" },
  { course: "magic", title: "magic", type: "pdf" },
  { course: "maths", title: "maths", type: "pdf" },
  { course: "english", title: "english", type: "pdf" },
];

const paymentRequests = [
  {
    name: "friday",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "maths",
    amount: 100,
    account_number: 100,
  },
  {
    name: "fridaysh",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "english",
    amount: 100,
    account_number: 100,
  },
  {
    name: "fridayry",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "history",
    amount: 100,
    account_number: 100,
  },
  {
    name: "friday",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "music",
    amount: 100,
    account_number: 100,
  },
  {
    name: "fridaymics",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "economics",
    amount: 100,
    account_number: 100,
  },
  {
    name: "fridaycs",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "physics",
    amount: 100,
    account_number: 100,
  },
  {
    name: "friday",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "magic",
    amount: 100,
    account_number: 100,
  },
  {
    name: "friday",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "maths",
    amount: 100,
    account_number: 100,
  },
  {
    name: "fridaysh",
    email: "fridaymaxtour@gmail.com",
    time: "2 days ago",
    bank: "english",
    amount: 100,
    account_number: 100,
  },
];

const notifications = [
  {
    title: "unihub has a new versoin, try updately right away",
    time: "2 days ago",
    in_app: false,
  },
  {
    title: "unihub has a new versoin, try updately right awaysh",
    time: "2 days ago",
    in_app: false,
  },
  {
    title: "unihub has a new versoin, try updately right awayry",
    time: "2 days ago",
    in_app: false,
  },
  {
    title: "unihub has a new versoin, try updately right away",
    time: "2 days ago",
    in_app: false,
  },
  {
    title: "unihub has a new versoin, try updately right awaymics",
    time: "2 days ago",
    in_app: false,
  },
  {
    title: "unihub has a new versoin, try updately right awaycs",
    time: "2 days ago",
    in_app: false,
  },
  {
    title: "unihub has a new versoin, try updately right away",
    time: "2 days ago",
    in_app: false,
  },
  {
    title: "unihub has a new versoin, try updately right away",
    time: "2 days ago",
    in_app: false,
  },
  {
    title: "unihub has a new versoin, try updately right awaysh",
    time: "2 days ago",
    in_app: false,
  },
];

const DomainModal = ({
  title,
  save,
  saver,
  endPoint,
  setLoading,
  setError,
  setSuccess,
  setRes,
}) => {
  return (
    <View style={styles.add}>
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          {title}
        </McText>
      </Header2Section>
      <Input
        placeholder="Domain title"
        saver={saver}
        save={save}
        field="title"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          setLoading(true);
          const domain = await fetcher(
            "http://localhost:3000/admin/" + endPoint + "/domain",
            "POST",
            {},
            save
          );

          if (domain.error) {
            setError(true);
          } else {
            setSuccess(true);
          }
          setRes(domain.data.message);
        }}
      >
        <Texti color="white">Make Request</Texti>
      </TouchableOpacity>
    </View>
  );
};

const CourseModal = ({
  title,
  save,
  saver,
  endPoint,
  setLoading,
  setError,
  setSuccess,
  setRes,
}) => {
  return (
    <View style={styles.add}>
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          {title}
        </McText>
      </Header2Section>
      <Input
        placeholder="Course title"
        saver={saver}
        save={save}
        field="title"
      />
      <Input
        placeholder="Domain title"
        saver={saver}
        save={save}
        field="domain"
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
        field="file"
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          setLoading(true);
          const course = await fetcher(
            "http://localhost:3000/admin/" + endPoint + "/course",
            "POST",
            {},
            save
          );
          if (course.error) {
            setError(true);
          } else {
            setSuccess(true);
          }
          setRes(course.data.message);
        }}
      >
        <Texti color="white">Make Request</Texti>
      </TouchableOpacity>
    </View>
  );
};

const ResourseModal = ({
  title,
  save,
  saver,
  endPoint,
  setLoading,
  setError,
  setSuccess,
  setRes,
}) => {
  return (
    <View style={styles.add}>
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          {title}
        </McText>
      </Header2Section>
      <Input
        placeholder="resource title"
        saver={saver}
        save={save}
        field="title"
      />
      <Texti color="#faad14">only pdf, json, video</Texti>
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
        placeholder="upload resource "
        saver={saver}
        save={save}
        field="file"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          setLoading(true);
          const resource = await fetcher(
            "http://localhost:3000/admin/" + endPoint + "/resource",
            "POST",
            {},
            save
          );
          if (resource.error) {
            setError(true);
          } else {
            setSuccess(true);
          }
          setRes(resource.data.message);
        }}
      >
        <Texti color="white">Make Request</Texti>
      </TouchableOpacity>
    </View>
  );
};

const NotificationModal = ({
  title,
  save,
  saver,
  setLoading,
  setError,
  setSuccess,
  setRes,
}) => {
  return (
    <View style={styles.add}>
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          {title}
        </McText>
      </Header2Section>
      <Input
        placeholder="notification title"
        saver={saver}
        save={save}
        field="title"
      />
      <Input placeholder="content" saver={saver} save={save} field="content" />
      <Input placeholder="link" saver={saver} save={save} field="link" />
      <Input placeholder="in app?" saver={saver} save={save} field="inApp" />
      <Input
        placeholder="upload image"
        saver={saver}
        save={save}
        field="file"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          setLoading(true);
          const notification = await fetcher(
            "http://localhost:3000/admin/create/notification",
            "POST",
            {},
            save
          );
          if (notification.error) {
            setError(true);
          } else {
            setSuccess(true);
          }
          setRes(notification.data.message);
        }}
      >
        <Texti color="white">Make Request</Texti>
      </TouchableOpacity>
    </View>
  );
};

const ContentModal = ({ data }) => {
  const goods = con(data);
  return (
    <TouchableWithoutFeedback>
      <FlatList
        keyExtractor={(i, index) => "_stats" + index}
        showsVerticalScrollIndicator={false}
        vertical
        data={goods}
        contentContainerStyle={{
          // display: "none",
          borderRadius: 20,
          backgroundColor: "#4dccc6",
          padding: 10,
          width: "97.8%",
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginBottom: 10,
              width: "100%",
              padding: 4,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
              alignItems: "center",
              justifyContent: "space-around",
              shadowColor: "black",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowRadius: 5,
              shadowOpacity: 0.5,
              elevation: 5,
              borderRadius: 8,
              flexDirection: "row",
              paddingHorizontal: 4,
            }}
          >
            <Texti size={14} color="grey">
              {item[0]}
            </Texti>
            {item[1].map((cont, index) => (
              <Batch key={uuidSuper(29) + index}>{cont}</Batch>
            ))}
          </TouchableOpacity>
        )}
      />
    </TouchableWithoutFeedback>
  );
};

const PaymentModal = ({ data }) => {
  const goods = con(data);
  return (
    <TouchableWithoutFeedback>
      <FlatList
        keyExtractor={(i, index) => "_stats" + index}
        showsVerticalScrollIndicator={false}
        vertical
        data={goods}
        contentContainerStyle={{
          // display: "none",
          borderRadius: 20,
          backgroundColor: "#4dccc6",
          padding: 10,
          width: "97.8%",
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginBottom: 10,
              width: "100%",
              padding: 14,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
              alignItems: "flex-start",
              justifyContent: "center",
              shadowColor: "black",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowRadius: 5,
              shadowOpacity: 0.5,
              elevation: 5,
              borderRadius: 8,
              paddingHorizontal: 8,
            }}
          >
            <Texti size={14} color="grey">
              {item[0]}
            </Texti>
            {item[1].map((cont, index) => (
              <Batch key={uuidSuper(29) + index}>{cont}</Batch>
            ))}

            <View
              style={{
                flexDirection: "row",
                margin: "auto",
              }}
            >
              <TouchableOpacity
                style={[styles.btn, { marginHorizontal: 14 }]}
                onPress={async () => {}}
              >
                <Texti color="lightgreen">Accept</Texti>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, { marginHorizontal: 14 }]}
                onPress={async () => {}}
              >
                <Texti color="red">Decline</Texti>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </TouchableWithoutFeedback>
  );
};

const Loader = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator style={{ marginTop: 200 }} />
      <Text>Updating Backend...</Text>
    </View>
  );
};

const ErrorBox = ({ text, setError, setLoading }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Texti size={19}>Transaction Failed!</Texti>

      <Response text={text} />
      <Button
        title="Get back!"
        onPress={() => {
          setError(false);
          setLoading(false);
        }}
      />
    </View>
  );
};

const Response = ({ text }) => {
  return (
    <View
      style={{
        padding: 15,
        borderColor: "yellow",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: 12,
        width: "90%",
        height: "60%",
        margin: "auto",
      }}
    >
      <Text>{text}</Text>
    </View>
  );
};

const SuccessBox = ({ text, setSuccess, setLoading }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Transaction Successfull </Text>
      <Response text={text} />
      <Button
        title="Get back!"
        onPress={() => {
          setSuccess(false);
          setLoading(false);
        }}
      />
    </View>
  );
};

export const FormContainer1 = () => {
  // FIXME: here i will get admin credentials and pass it downwards
  const [save, saver] = useState(null);
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

  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  return !loading ? (
    <View
      style={{
        width: "100%",
        marginHorizontal: 4,
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          All Domains
        </McText>
      </Header2Section>
      <ContentModal data={domains} />
      <DomainModal
        endPoint="create"
        title="Create a Domain"
        save={save}
        saver={saver}
        setLoading={setLoading}
        setError={setError}
        setRes={setRes}
        setSuccess={setSuccess}
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
      <DomainModal
        endPoint="delete"
        title="Delete a Domain"
        save={save}
        saver={saver}
        setLoading={setLoading}
        setError={setError}
        setRes={setRes}
        setSuccess={setSuccess}
      />
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
  ) : isError ? (
    <ErrorBox text={res} setError={setError} setLoading={setLoading} />
  ) : isSuccess ? (
    <SuccessBox text={res} setSuccess={setSuccess} setLoading={setLoading} />
  ) : (
    <Loader />
  );
};

export const FormContainer2 = () => {
  // FIXME: here i will get admin credentials and pass it downwards
  const [save, saver] = useState(null);
  useEffect(() => {
    // i should retrieve the cre from storage here
    saver({
      name: "friday",
      email: "fridaymichaels662@gmail.com",
      password: "uiedbooker662",
      yeah_that_freaking_thing: true,
      title: "",
      domain: "",
      welcome: "",
    });
  }, []);

  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  return !loading ? (
    <View
      style={{
        width: "100%",
        marginHorizontal: 4,
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          All Courses
        </McText>
      </Header2Section>
      <ContentModal data={courses} />
      <CourseModal
        title="Create a Course"
        save={save}
        saver={saver}
        endPoint="create"
        setRes={setRes}
        setLoading={setLoading}
        setError={setError}
        setSuccess={setSuccess}
      />
      <Seperator />
      <CourseModal
        title="Delete a Course"
        save={save}
        saver={saver}
        endPoint="delete"
        setRes={setRes}
        setLoading={setLoading}
        setError={setError}
        setSuccess={setSuccess}
      />
      <Rules>
        <Text>NB:</Text>
        <McText left={10} color="#faad14" size={15}>
          Make sure it's spelt correctly
        </McText>
        <McText left={10} color="#faad14" size={15}>
          Make sure The course don't already exists in the database
        </McText>
      </Rules>
    </View>
  ) : isError ? (
    <ErrorBox text={res} setError={setError} setLoading={setLoading} />
  ) : isSuccess ? (
    <SuccessBox text={res} setSuccess={setSuccess} setLoading={setLoading} />
  ) : (
    <Loader />
  );
};

export const FormContainer3 = () => {
  // FIXME: here i will get admin credentials and pass it downwards
  const [save, saver] = useState(null);
  useEffect(() => {
    // i should retrieve the cre from storage here
    saver({
      name: "friday",
      email: "fridaymichaels662@gmail.com",
      password: "uiedbooker662",
      yeah_that_freaking_thing: true,
      title: "",
      domain: "",
      type: "",
      courseTitle: "",
      resourceTitle: "",
    });
  }, []);

  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  return !loading ? (
    <View
      style={{
        width: "100%",
        marginHorizontal: 4,
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          All Resource
        </McText>
      </Header2Section>
      <ContentModal data={resources} />
      <ResourseModal
        title="Create a resource"
        save={save}
        saver={saver}
        endPoint="create"
        setRes={setRes}
        setLoading={setLoading}
        setError={setError}
        setSuccess={setSuccess}
      />
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
        field="resourceTitle"
      />
      <Input
        placeholder="course title"
        saver={saver}
        save={save}
        field="courseTitle"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          setLoading(true);
          const resource = await fetcher(
            "http://localhost:3000/admin/delete/resource",
            "POST",
            {},
            save
          );
          if (resource.error) {
            setError(true);
          } else {
            setSuccess(true);
          }
          setRes(resource.data.message);
        }}
      >
        <Texti color="white">Make Request</Texti>
      </TouchableOpacity>
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
  ) : isError ? (
    <ErrorBox text={res} setError={setError} setLoading={setLoading} />
  ) : isSuccess ? (
    <SuccessBox text={res} setSuccess={setSuccess} setLoading={setLoading} />
  ) : (
    <Loader />
  );
};

export const FormContainer7 = () => {
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
      <TouchableOpacity style={styles.btn}>
        <Texti color="white">Make Request</Texti>
      </TouchableOpacity>
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

export const FormContainer6 = () => {
  const [save, saver] = useState({
    title: "",
  });
  return (
    <View
      style={{
        width: "100%",
        marginHorizontal: 4,
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
      <TouchableOpacity style={styles.btn}>
        <Texti color="white">Make Request</Texti>
      </TouchableOpacity>
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

export const FormContainer5 = () => {
  const [save, saver] = useState({
    title: "",
  });
  return (
    <View
      style={{
        width: "100%",
        marginHorizontal: 4,
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

      <TouchableOpacity style={styles.btn}>
        <Texti color="white">Make Request</Texti>
      </TouchableOpacity>
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

export const FormContainer4 = () => {
  const [save, saver] = useState({
    title: "",
  });
  return (
    <View
      style={{
        width: "100%",
        marginBottom: 50,
        marginHorizontal: 4,
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          All payment requests
        </McText>
      </Header2Section>
      <PaymentModal data={paymentRequests} />
      {
        //FIXME: the response container not ready
      }
    </View>
  );
};

export const FormContainer8 = () => {
  // FIXME: here i will get admin credentials and pass it downwards
  const [save, saver] = useState(null);
  useEffect(() => {
    // i should retrieve the cre from storage here
    saver({
      name: "friday",
      email: "fridaymichaels662@gmail.com",
      password: "uiedbooker662",
      yeah_that_freaking_thing: true,
      title: "",
      content: "",
      link: "",
      inApp: "no",
    });
  }, []);

  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  return !loading ? (
    <View
      style={{
        width: "100%",
        marginHorizontal: 4,
      }}
    >
      <Header2Section>
        <McText left={16} color="#A0A3BD" semi size={18}>
          All Notifications
        </McText>
      </Header2Section>
      <ContentModal data={notifications} />
      <NotificationModal
        title="Create a Notification"
        save={save}
        saver={saver}
        endPoint="create"
        setRes={setRes}
        setLoading={setLoading}
        setError={setError}
        setSuccess={setSuccess}
      />
    </View>
  ) : isError ? (
    <ErrorBox text={res} setError={setError} setLoading={setLoading} />
  ) : isSuccess ? (
    <SuccessBox text={res} setSuccess={setSuccess} setLoading={setLoading} />
  ) : (
    <Loader />
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

const styles = StyleSheet.create({
  add: {
    width: "80%",
    justifyContent: "center",
    margin: "auto",
    marginBottom: 20,
  },
  cre: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  btn: {
    // backgroundColor: "#08b9fc",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#A0A3BD",
    margin: "auto",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
});
// #A0A3BD

const Header2Section = styled.View`
  margin: 30px 0px 6px auto;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 20px;
  width: 100%;
`;

const Texti = styled.Text`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-weight: 800;
  text-align: center;
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
// background-color: #eeeeee;
const Batch = styled.Text`
  justify-content: center;
  align-items: center;
  padding: 4px;
  font-weight: 800;
  color: grey;
  text-align: center;
  border-radius: 14px;
`;
