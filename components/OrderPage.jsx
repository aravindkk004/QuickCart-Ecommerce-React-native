import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

export default function OrderPage({ details }) {
  const { height, width } = useWindowDimensions();
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "./productDetailsPage",
          params: { details },
        })
      }
      style={{
        borderWidth: 1,
        borderColor: Colors.GRAY,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
      }}
    >
      <Image
        source={require("./../assets/bg-removed/shoe.png")}
        style={{
          height: height * 0.15,
          width: width * 0.3,
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          marginRight: 10,
        }}
      />
      <View>
        <Text style={{ fontFamily: "outfit-bold", fontSize: height * 0.022 }}>
          {details.title}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: height * 0.023,
            color: Colors.GRAY,
          }}
        >
          Shoes
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: height * 0.03,
            color: Colors.PRIMARY,
            marginTop: height * 0.012,
          }}
        >
          $ {details.price }
        </Text>
      </View>
      <View>
        <Feather name="chevron-right" size={30} color="black" />
      </View>
    </TouchableOpacity>
  );
}
