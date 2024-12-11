import { View, Text, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function IndexPage() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ backgroundColor: Colors.SECONDARY }}>
      <Image
        source={require("./../assets/images/shopping.png")}
        style={{ width: "100%", height: height*0.6 }}
      />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={require("./../assets/images/logo.png")}
            style={{ height: height*0.04, width: width*0.1 }}
          />
          <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
            Quick Cart
          </Text>
        </View>
        <Text
          style={{ fontFamily: "outfit-medium", fontSize: height*0.04, marginTop: 10 }}
        >
          Everything you need is in one place
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.GRAY,
            fontSize: height*0.022,
            marginTop: 10,
          }}
        >
          Find your daily necessities in at brand. The world&apos;s largest
          fashion E-Commerce has arrived in a mobile. Shop now!
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/auth/sign-in")}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 10,
            borderRadius: 40,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: height*0.025,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
  },
});
