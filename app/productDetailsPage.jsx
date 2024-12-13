import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { useGlobalSearchParams, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"; 
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const imageMap = {
  "ac.png": require("./../assets/bg-removed/ac.png"),
  "bag.png": require("./../assets/bg-removed/bag.png"),
  "headset.png": require("./../assets/bg-removed/headset.png"),
  "keyboard.png": require("./../assets/bg-removed/keyboard.png"),
  "laptop.png": require("./../assets/bg-removed/laptop.png"),
  "mouse.png": require("./../assets/bg-removed/mouse.png"),
  "iphone.png": require("./../assets/bg-removed/iphone.png"),
  "redmi.png": require("./../assets/bg-removed/redmi.png"),
  "nike.png": require("./../assets/bg-removed/shoe.png"),
  "tv.png": require("./../assets/bg-removed/tv.png"),
};

export default function productDetailsPage() {
  const [like, setLike] = useState(true); 
  const { details } = useGlobalSearchParams();
  const {height, width} = useWindowDimensions();
  const product = details ? JSON.parse(details) : {};
  const router = useRouter();
  console.log(product.imgUrl);

  const [count, setCount] = useState(1);
  const initialPrice = Number(product.price.replace(/,/g, ""));
  const [price, setPrice] = useState(initialPrice);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
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
      <TouchableOpacity
        style={{ position: "absolute", margin: 20, zIndex: 10, right: 10, top: 5 }}
      >
        {like ? (
          <FontAwesome name="heart" size={28} color="red" />
        ) : (
          <Feather name="heart" size={28} color="black" />
        )}
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
          source={imageMap[product.imgUrl]}
          style={{ height: 300, width: "90%", borderRadius: 10 }}
          resizeMode="contain"
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
          style={{ fontFamily: "outfit", fontSize: 18, color: Colors.GRAY }}
        >
          {product.category}
        </Text>
        <Text
          style={{ fontFamily: "outfit-medium", fontSize: 22, marginTop: 10 }}
        >
          Description
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: height*0.022 }}
        >
          {product.description}
        </Text>

        {/* price section  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: Colors.PRIMARY,
              fontFamily: "outfit-bold",
              fontSize: 30,
              marginTop: 10,
            }}
          >
            $ {formatPrice(price)}
          </Text>
        </View>

        {/* rating section  */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <FontAwesome name="star" size={24} color="#FDD663" />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, marginRight: 5 }}
            >
              {product.rating}
            </Text>
            <Text
              style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 18 }}
            >
              ({product.ratingCount})
            </Text>
          </View>
        </View>

        {/* features section  */}
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 23,
              marginVertical: 10,
            }}
          >
            Features
          </Text>
          {product.features.map((feature) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo
                name="dot-single"
                size={24}
                color="black"
                style={{ width: 24 }}
              />
              <Text style={{ fontFamily: "outfit", fontSize: height*0.024 }}>
                {feature}
              </Text>
            </View>
          ))}
        </View>

        {/* buy now button  */}
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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: height*0.025,
                textAlign: "center",
                color: Colors.WHITE,
                width: 120,
              }}
            >
              Add to Cart
            </Text>
            <FontAwesome5 name="shopping-cart" size={20} color={Colors.WHITE} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    color: "black",
  },
});
