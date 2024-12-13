// import { useRouter } from "expo-router";
// import { useEffect } from "react";

// export default function create() {
//   const router = useRouter();

//   useEffect(() => {
//     router.push({
//       pathname: "/CartPage",
//       params: {
//         id: 9,
//         imgUrl: "nike.png",
//         category: "Travel Accessories",
//         price: "2,875",
//         rating: "3.9",
//         ratingCount: "8,268",
//         description:
//           "Run, jump, and conquer terrains with Nike Sports Shoe, crafted for performance and comfort. Its lightweight design ensures effortless movement all day long.",
//         title: "Nike Sports Shoe",
//         features: [
//           "Breathable mesh upper",
//           "Cushioned sole for comfort",
//           "Lightweight design",
//           "Slip-resistant grip",
//         ],
//         tags: [
//           "travel accessories",
//           "sports shoes",
//           "comfortable",
//           "performance",
//           "nike",
//           "running",
//         ],
//       },
//     });
//   }, []);

//   return <></>;
// }

import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CartItem from "../../components/HomePageComponents/CartItem";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Cart() {
  const [amount, setAmount] = useState(1278);
  const { height, width } = useWindowDimensions();
  const router = useRouter();
  return (
    <View style={{ padding: 10, height: "100%" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <TouchableOpacity onPress={()=>router.back()}><Ionicons name="chevron-back" size={24} color="black" style={{width: 50, padding:10}} /></TouchableOpacity> */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: height * 0.038,
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
      <ScrollView
        style={{
          marginBottom: height * 0.1,
        }}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <CartItem />
        <CartItem />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          position: "absolute",
          bottom: -12,
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
