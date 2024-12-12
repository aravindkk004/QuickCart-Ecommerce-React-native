import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CartItem() {
  const [count, setCount] = useState(0);
  const initialPrice = 4780;
  const [price, setPrice] = useState(initialPrice);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };
  const increaseCount = () => {
    setCount(count + 1);
    setPrice(initialPrice * (count + 1));
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrice(initialPrice * (count - 1));
    }
  };
  return (
    <View
      style={{
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
        }}
        style={{ height: 100, width: 100, borderRadius: 10, marginRight: 10 }}
      />
      <Ionicons
        name="trash-outline"
        size={20}
        color="black"
        style={{
          position: "absolute",
          right: 10,
          top: 10,
          backgroundColor: "red",
          color: Colors.WHITE,
          padding: 2,
          borderRadius: 5,
        }}
      />
      <View>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 23 }}>
          Nike Shoe
        </Text>
        <Text
          style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 20 }}
        >
          Shoe
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 23,
            marginTop: 5,
            color: Colors.PRIMARY,
          }}
        >
          $ {formatPrice(price)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 60,
        }}
      >
        <AntDesign
          name="minus"
          size={24}
          color="black"
          style={{ borderWidth: 1, borderRadius: 5, borderColor: Colors.GRAY }}
          onPress={decreaseCount}
        />{" "}
        <Text style={{ marginHorizontal: 10 }}>{count}</Text>{" "}
        <Ionicons
          name="add"
          size={24}
          color="black"
          style={{ borderWidth: 1, borderRadius: 5, borderColor: Colors.GRAY }}
          onPress={increaseCount}
        />
      </View>
    </View>
  );
}
