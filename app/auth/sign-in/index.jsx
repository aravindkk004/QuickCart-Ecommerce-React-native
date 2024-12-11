import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ padding: 20, flex: 1 }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.SECONDARY,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            width: 50,
            height: 50,
            borderRadius: 14,
            borderColor: Colors.GRAY,
          }}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: height * 0.02,
          }}
        >
          <Image
            source={require("./../../../assets/images/logo.png")}
            style={{ height: height * 0.10, width: width * 0.3 }}
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: height * 0.04,
              marginTop: height * 0.03,
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: height * 0.025,
              marginTop: height * 0.01,
              color: Colors.GRAY,
            }}
          >
            Login to continue to using this app
          </Text>

          <View style={{ marginTop: height * 0.03 }}>
            <Text
              style={{ fontFamily: "outfit-medium", fontSize: height * 0.025 }}
            >
              Email
            </Text>
            <TextInput
              type="text"
              placeholder="Enter Email"
              onChangeText={(value) => setEmail(value)}
              value={email}
              style={[
                styles.input,
                { height: height * 0.06, borderColor: Colors.GRAY },
              ]}
            />
          </View>

          <View style={{ marginTop: height * 0.03 }}>
            <Text
              style={{ fontFamily: "outfit-medium", foontSize: height * 0.025 }}
            >
              Password
            </Text>
            <TextInput
              secureTextEntry={true}
              placeholder="Enter Password"
              onChangeText={(value) => setPassword(value)}
              value={password}
              style={[
                styles.input,
                { height: height * 0.06, borderColor: Colors.GRAY },
              ]}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 16,
              borderRadius: 30,
              marginTop: height * 0.03,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: height * 0.025,
                color: Colors.WHITE,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: height * 0.025,
              marginTop: height * 0.03,
              color: Colors.GRAY,
            }}
          >
            Or Login with
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: height * 0.02,
            }}
          >
            <View style={styles.box}>
              <Image
                source={require("./../../../assets/images/facebook.png")}
                style={{ height: width * 0.1, width: width * 0.1 }}
              />
            </View>
            <View style={styles.box}>
              <Image
                source={require("./../../../assets/images/search.png")}
                style={{ height: width * 0.1, width: width * 0.1 }}
              />
            </View>
            <View style={styles.box}>
              <Image
                source={require("./../../../assets/images/apple.png")}
                style={{ height: width * 0.1, width: width * 0.1 }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: height * 0.025,
                textAlign: "center",
                marginVertical: height * 0.03,
              }}
            >
              Don&apos;t have an account?{" "}
              <TouchableOpacity onPress={() => router.replace("/auth/sign-up")}>
                <Text
                  style={{
                    color: Colors.PRIMARY,
                    fontFamily: "outfit",
                    fontSize: height * 0.025,
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: Colors.GREY,
    fontFamily: "outfit",
    marginTop: 4,
  },
  box: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    padding: 15,
    borderRadius: 20,
  },
});
