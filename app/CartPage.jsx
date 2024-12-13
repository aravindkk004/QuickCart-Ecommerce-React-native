import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import CartItem from "./../components/HomePageComponents/CartItem";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function CartPage() {
  const [amount, setAmount] = useState(1278);
  const {height, width} = useWindowDimensions();
  const router = useRouter();
  return (
    <View style={{ padding: 10, height: "100%" }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={()=>router.back()}><Ionicons name="chevron-back" size={24} color="black" style={{width: 50, padding:10}} /></TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: height*0.038,
            marginVertical: 10,
            marginHorizontal: 10,
            width: "140",
          }}
        >
          Your Cart
        </Text>
        <Entypo
          name="shopping-cart"
          size={24}
          color="black"
          style={{ width: 50 }}
        />
      </View>
      </View>
      <CartItem />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          position: "absolute",
          bottom: 0,
        }}
      >
        <View style={{ flexDirection: "column", width: "45%" }}>
          <Text
            style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 20 }}
          >
            Total Amount
          </Text>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
            $ {amount}
          </Text>
        </View>
        <TouchableOpacity style={{ width: "60%" }}>
          <Text
            style={{
              backgroundColor: Colors.PRIMARY,
              color: Colors.WHITE,
              padding: 15,
              textAlign: "center",
              fontFamily: "outfit-medium",
              fontSize: 20,
              borderRadius: 10,
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
