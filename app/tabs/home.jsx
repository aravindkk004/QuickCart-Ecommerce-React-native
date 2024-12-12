import {
  View,
  Text,
  useWindowDimensions,
  SectionList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import Banner from "./../../components/Banner";
import CategoryLists from "../../components/HomePageComponents/CategoryLists";
import TopPicks from "../../components/HomePageComponents/TopPicks";

export default function Home() {
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ]);

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SectionList
      style={{ padding: 20 }}
      sections={[
        {
          title: "Search Results",
          data: searchQuery.trim().length > 0 ? filteredData : [],
        },
        { title: "Banner", data: [{}] },
        { title: "Categories", data: [{}] },
        { title: "Top Picks", data: [{}] },
      ]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, section }) => {
        if (section.title === "Search Results") {
          return (
            <Text
              style={{
                fontSize: 18,
                marginVertical: 5,
                fontFamily: "outfit",
              }}
            >
              {item}
            </Text>
          );
        } else if (section.title === "Banner") {
          return <Banner />;
        } else if (section.title === "Categories") {
          return <CategoryLists />;
        } else if (section.title === "Top Picks") {
          return <TopPicks />;
        }
        return null;
      }}
      renderSectionHeader={({ section: { title } }) => {
        if (title !== "Search Results") {
          return null;
        }
        return (
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              gap: 15,
            }}
          >
            <TextInput
              placeholder="What are you looking for"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={{
                width: width * 0.72,
                borderColor: Colors.GRAY,
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                backgroundColor: Colors.WHITE,
                fontFamily: "outfit",
              }}
            />
            <View
              style={{
                width: width * 0.13,
                padding: 10,
                borderWidth: 1,
                borderColor: Colors.GRAY,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: Colors.WHITE,
              }}
            >
              <Ionicons name="search" size={24} color="black" />
            </View>
          </View>
        );
      }}
    />
  );
}
