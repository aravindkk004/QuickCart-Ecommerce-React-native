import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import Banner from "./../../components/Banner";

export default function Home() {
  const { width, height } = useWindowDimensions();
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
    <View style={{ padding: 20 }}>
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
            width: width*0.72,
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
            width: width*0.13,
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
      {searchQuery.trim().length > 0 && (
        <FlatList
          style={{
            backgroundColor: Colors.WHITE,
            padding: 10,
            marginTop: 5,
            borderRadius: 10,
          }}
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text
              style={{
                fontSize: 18,
                marginVertical: 5,
                fontFamily: "outfit",
              }}
            >
              {item}
            </Text>
          )}
          nestedScrollEnabled
        />
      )}
      <Banner />
    </View>
  );
}
