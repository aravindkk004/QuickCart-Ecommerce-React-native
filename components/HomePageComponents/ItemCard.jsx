import { View, Text, Image, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const imageMap = {
  "ac.png": require("./../../assets/bg-removed/ac.png"),
  "bag.png": require("./../../assets/bg-removed/bag.png"),
  "headset.png": require("./../../assets/bg-removed/headset.png"),
  "keyboard.png": require("./../../assets/bg-removed/keyboard.png"),
  "laptop.png": require("./../../assets/bg-removed/laptop.png"),
  "mouse.png": require("./../../assets/bg-removed/mouse.png"),
  "iphone.png": require("./../../assets/bg-removed/iphone.png"),
  "redmi.png": require("./../../assets/bg-removed/redmi.png"),
  "nike.png": require("./../../assets/bg-removed/shoe.png"),
  "tv.png": require("./../../assets/bg-removed/tv.png"),
};

export default function ItemCard({ details }) {
  const [liked, setLiked] = useState(true);
  const{height, width} = useWindowDimensions();
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
          source={imageMap[details.imgUrl]}
          style={{ height: 100, width: "100%", borderRadius: 20 }}
          resizeMode="contain"
        />
        {liked ? (
          <Ionicons
            name="heart"
            size={23}
            color="red"
            style={{ position: "absolute", left: '80%', top: 0 }}
          />
        ) : (
          <Ionicons
            name="heart-outline"
            size={23}
            color="black"
            style={{ position: "absolute", left: '86%', top: 0 }}
          />
        )}
      </View>
      <View style={{ marginTop: 8 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: height*0.018 }}>
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
            fontSize: height*0.023,
            color: Colors.PRIMARY,
          }}
        >
          $ {details.price}
        </Text>
      </View>
    </View>
  );
}