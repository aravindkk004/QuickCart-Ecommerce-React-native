import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useGlobalSearchParams, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function productDetailsPage() {
  const { details } = useGlobalSearchParams();
  const product = details ? JSON.parse(details) : {};
  const router = useRouter();
  console.log(product.imgUrl);

  const [count, setCount] = useState(1);
  const initialPrice = Number(product.price.replace(/,/g, ""));
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
    <ScrollView>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: Colors.GRAY,
          backgroundColor: Colors.WHITE,
          width: 40,
          padding: 5,
          position: "absolute",
          margin: 20,
          zIndex: 10,
        }}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: Colors.SECONDARY,
          height: 400,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("./../assets/bg-removed/shoe.png")}
          style={{ height: 300, width: "90%", borderRadius: 10 }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          padding: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: Colors.WHITE,
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
          {product.title}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 23, color: Colors.GRAY }}
        >
          {product.category}
        </Text>
        <Text
          style={{ fontFamily: "outfit-medium", fontSize: 22, marginTop: 10 }}
        >
          Description
        </Text>
        <Text
          style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 17 }}
        >
          Experience the perfect blend of style and performance with Nike's
          iconic shoes, crafted to deliver unparalleled comfort and timeless
          design. From cutting-edge technology to sleek aesthetics, these
          sneakers are built for both functionality and fashion.
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "outfit-bold",
              fontSize: 30,
              marginTop: 10,
            }}
          >
            $ {formatPrice(price)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderWidth: 1,
              borderColor: Colors.GRAY,
              padding: 3,
              borderRadius: 5,
            }}
          >
            <AntDesign
              name="minus"
              size={24}
              color="black"
              onPress={decreaseCount}
            />{" "}
            <Text style={{ marginHorizontal: 10 }}>{count}</Text>{" "}
            <Ionicons
              name="add"
              size={24}
              color="black"
              onPress={increaseCount}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: Colors.GRAY,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text>Add to Cart</Text>
            <FontAwesome5 name="shopping-cart" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: Colors.PRIMARY,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 22,
                textAlign: "center",
                color: Colors.WHITE,
              }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
