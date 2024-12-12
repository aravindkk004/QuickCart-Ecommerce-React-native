import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Profile() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          marginTop: 50,
        }}
      >
        <Image
          source={require("./../../assets/images/apple.png")}
          style={{ height: 80, width: 80, borderRadius: 50 }}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Aravind K K
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 20,
            color: Colors.GRAY,
            textAlign: "center",
          }}
        >
          aravind463kk30@gmail.com
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <View style={styles.box}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto
              name="shopping-package"
              size={24}
              color="black"
              style={{ width: 30 }}
            />
            <Text
              style={{ fontFamily: "ourfit", fontSize: 18, marginLeft: 10 }}
            >
              Your Orders
            </Text>
          </View>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
        <View style={styles.box}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name="headset"
              size={24}
              color="black"
              style={{ width: 30 }}
            />
            <Text
              style={{ fontFamily: "ourfit", fontSize: 18, marginLeft: 10 }}
            >
              Help Center
            </Text>
          </View>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
        <View style={styles.box}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="logout"
              size={24}
              color="black"
              style={{ width: 30 }}
            />
            <Text
              style={{ fontFamily: "ourfit", fontSize: 18, marginLeft: 10 }}
            >
              Logout
            </Text>
          </View>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
});
