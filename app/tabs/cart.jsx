import { View, Text } from "react-native";
import React from "react";
import CartItem from "../../components/HomePageComponents/CartItem";
import Entypo from "@expo/vector-icons/Entypo";

export default function create() {
  return (
    <View style={{ padding: 10 }}>
      <View style={{flexDirection:'row', alignItems: "center"}}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
            marginVertical: 10,
            marginHorizontal: 10,
            width: "140"
          }}
        >
          Your Cart
        </Text>
        <Entypo name="shopping-cart" size={24} color="black" style={{width: 50}}/>
      </View>
      <CartItem />
    </View>
  );
}
