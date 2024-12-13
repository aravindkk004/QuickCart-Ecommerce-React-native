import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import OrderPage from "../components/OrderPage";
import { useGlobalSearchParams } from "expo-router";

export default function OrdersPage() {
  const { height, width } = useWindowDimensions();
  const { details } = useGlobalSearchParams();
  let product = [];
  try {
    product = details ? JSON.parse(details) : [];
  } catch (error) {
    console.error("Error parsing details:", error);
  }
  console.log(product);
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: height * 0.032 }}>
        Your Orders
      </Text>
      <View>
        <OrderPage details={product[0]} />
      </View>
    </View>
  );
}
