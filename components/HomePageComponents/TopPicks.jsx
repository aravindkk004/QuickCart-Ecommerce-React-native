import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";
import { useRouter } from "expo-router";
import product from "./../../products";

export default function TopPicks() {
  const router = useRouter();
  const key = `flatlist-columns-${2}`;
  const products = [];
  for (let i = 0; i < 4; i++) {
    products.push(product[i]);
  }
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 22 }}>
        Top Picks For You
      </Text>
      <View style={{ width: "100%" }}>
        <FlatList
          key={key}
          keyExtractor={(item, index) => index.toString()}
          style={{
            marginTop: 10,
            marginBottom: 50,
          }}
          numColumns={2}
          data={products}
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
              <View style={{ width: "100%" }}>
                <ItemCard details={item} />
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
