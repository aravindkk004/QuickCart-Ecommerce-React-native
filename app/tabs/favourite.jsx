import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React from "react";
import ItemCard from "../../components/HomePageComponents/ItemCard";
import products from "./../../products";

export default function Favourite() {
  const key = `flatlist-columns-${2}`;
  const { width } = useWindowDimensions();
  return (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginHorizontal: 10,
          marginTop: 10
        }}
      >
        Your Favourites
      </Text>
      <FlatList key={key}
          keyExtractor={(item, index) => index.toString()}
          style={{
            marginTop: 10,
            marginBottom: width * 0.12,
          }}
          numColumns={2}
          data={products}
          renderItem={({ item, index }) => (
            <View style={{ width: "50%" }}>
              <ItemCard details={item} />
            </View>
          )}
          showsVerticalScrollIndicator={false}/>
    </View>
  );
}
