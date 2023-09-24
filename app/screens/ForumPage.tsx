import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PostComponent = ({}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={require("../../assets/ria.png")}
          style={styles.profileImage}
        />
        <Text style={styles.username}></Text>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="black"
          style={styles.threeDots}
        />
      </View>
      <Text style={styles.postCaption}></Text>
      <View style={styles.postImage}>
        <Image
          source={require("../../assets/planting.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.postIcons}>
        <Ionicons
          name="earth-sharp"
          size={28}
          color="black"
          style={{ flex: 0.25 }}
        />
        <FontAwesome
          name="commenting-o"
          size={28}
          color="black"
          style={{ flex: 0.25 }}
        />
        <Feather
          name="share-2"
          size={28}
          color="black"
          style={{ flex: 0.25 }}
        />
        <MaterialIcons name="save-alt" size={28} color="black" />
      </View>
    </View>
  );
};

const data = [
{
  id: 'id1',
  username: 'Ria',
  caption: 'For a better tomorrow , plant more trees today!',
  imgSource: '../../assets/plantig.png',
},
{
  id: 'id2',
  username: 'Ria',
  caption: 'For a better tomorrow , plant more trees today!',
  imgSource: '../../assets/plantig.png',
},
{
  id: 'id3',
  username: 'Ria',
  caption: 'For a better tomorrow , plant more trees today!',
  imgSource: '../../assets/plantig.png',
},
{
  id: 'id4',
  username: 'Ria',
  caption: 'For a better tomorrow , plant more trees today!',
  imgSource: '../../assets/plantig.png',
},
{
  id: 'id5',
  username: 'Ria',
  caption: 'For a bettkjnkjkjkjkuhjer tomorrow , plant more trees today!',
  imgSource: '../../assets/plantig.png',
}];

const ForumPage = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <PostComponent username={item.username} caption={item.caption} />}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "#F5F5F5",
  },
  postContainer: {
    width: Dimensions.get("window").width,
    marginVertical: 4,
  },
  postHeader: {
    flexDirection: "row",
    height: 50,
  },
  postCaption: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#FAFAFA",
  },
  postImage: {},
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
  postIcons: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 6,
    backgroundColor: "#D5E6E2",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 100,
    alignSelf: "center",
    marginLeft: 10,
  },
  threeDots: {
    alignSelf: "center",
    position: "absolute",
    right: 10,
  },
  username: {
    alignSelf: "center",
    marginLeft: 10,
  },
});

export default ForumPage;