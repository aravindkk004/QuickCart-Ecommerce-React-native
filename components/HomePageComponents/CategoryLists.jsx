import { View, Text, Image, useWindowDimensions, FlatList } from "react-native";
import React from "react";

export default function CategoryLists() {
  const { width, height } = useWindowDimensions();
  const datas = [
    {
      name: "Mobiles",
      source: require("./../../assets/images/categories/mobile.jpg"),
    },
    {
      name: "Grocery",
      source: require("./../../assets/images/categories/grocery.jpeg"),
    },
    {
      name: "Flight",
      source: require("./../../assets/images/categories/flight.jpeg"),
    },
    {
      name: "Furniture",
      source: require("./../../assets/images/categories/furniture.jpeg"),
    },
    {
      name: "Appliances",
      source: require("./../../assets/images/categories/appliances.jpeg"),
    },
    {
      name: "Toys",
      source: require("./../../assets/images/categories/toys.jpeg"),
    },
  ];
  const key = `flatlist-columns-${3}`;
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 22 }}>
        Categories
      </Text>
      <FlatList
        key={key}
        keyExtractor={(item, index) => index.toString()}
        style={{
          marginTop: 10,
        }}
        numColumns={3}
        data={datas}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: width * 0.3,
              flexDirection: "column",
              alignItems: "center",
              marginBottom :10,
            }}
          >
            <Image
              source={item.source}
              style={{ height: 70, width: 70, borderRadius: 10 }}
            />{" "}
            <Text
              style={{
                textAlign: "center",
                fontFamily: "outfit",
                fontSize: 12,
                marginTop: 3,
              }}
            >
              {" "}
              {item.name}{" "}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
