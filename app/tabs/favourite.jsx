import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ItemCard from "../../components/HomePageComponents/ItemCard";
import products from "./../../products";
import { useRouter } from "expo-router";

export default function Favourite() {
  const router = useRouter();
  const key = `flatlist-columns-${2}`;
  const { height, width } = useWindowDimensions();
  return (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: height*0.038,
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        Your Favourites
      </Text>
      <FlatList
        key={key}
        keyExtractor={(item, index) => index.toString()}
        style={{
          marginTop: 10,
          marginBottom: width * 0.12,
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
            <ItemCard details={item} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
