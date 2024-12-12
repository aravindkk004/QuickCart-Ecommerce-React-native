import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ItemCard({ details }) {
  const [liked, setLiked] = useState(true);
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Colors.GRAY,
        backgroundColor: Colors.WHITE,
        padding: 5,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
      }}
    >
      <View>
        <Image
          source={{ uri: details.imgUrl }}
          style={{ height: 100, width: "100%", borderRadius: 20 }}
          resizeMode="contain"
        />
        {liked ? (
          <Ionicons
            name="heart"
            size={20}
            color="red"
            style={{ position: "absolute", left: '86%', top: 0 }}
          />
        ) : (
          <Ionicons
            name="heart-outline"
            size={20}
            color="black"
            style={{ position: "absolute", left: '86%', top: 0 }}
          />
        )}
      </View>
      <View style={{ marginTop: 8 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 15 }}>
          {details.title}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="star" size={15} color="#FDD663" />
        <Text>
          {details.rating} ({details.ratingCount})
        </Text>
      </View>
      <View style={{ marginTop: 8 }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 15,
            color: Colors.PRIMARY,
          }}
        >
          $ {details.price}
        </Text>
      </View>
    </View>
  );
}
