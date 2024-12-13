import {
  View,
  Text,
  FlatList,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import product from "../../products";
import ItemCard from "../../components/HomePageComponents/ItemCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Explore() {
  const key = `flatlist-columns-${2}`;
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    "Mobiles",
    "Electronics",
    "Headset",
    "Shoes",
    "IPhone",
    "Redmi Mobiles",
    "Travel bags",
  ]);
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <View style={{ padding: 10 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 35, margin: 10 }}>
          Explore Here
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 15,
            paddingHorizontal: 10,
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
        <FlatList
          key={key}
          keyExtractor={(item, index) => index.toString()}
          style={{
            marginTop: 10,
            marginBottom: width * 0.3,
          }}
          numColumns={2}
          data={product}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ width: "50%" }}
              onPress={() =>
                router.push({
                  pathname: "./../productDetailsPage",
                  params: { details: JSON.stringify(item) },
                })
              }
            >
              <ItemCard details={item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>
        <Text>Hello</Text>
      </View>
    </>
  );
}
