import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, padding: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          source={require("./../../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Enter your Personal Information</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          type="text"
          placeholder="Enter Username"
          onChangeText={(value) => setUserName(value)}
          value={userName}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          type="text"
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
          value={email}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
          value={password}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.alternateLoginText}>Or Register with</Text>

      <View style={styles.socialIconsContainer}>
        <View style={styles.box}>
          <Image
            source={require("./../../../assets/images/facebook.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require("./../../../assets/images/search.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require("./../../../assets/images/apple.png")}
            style={styles.icon}
          />
        </View>
      </View>

      <Text style={styles.footerText}>
        Already have an account?{" "}
        <TouchableOpacity onPress={()=>router.replace("/auth/sign-in")}>
          <Text
            style={[
              styles.registerLink,
              { fontFamily: "outfit", fontSize: 20 },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: Colors.SECONDARY,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 14,
    borderColor: Colors.GRAY,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    height: width * 0.2,
    width: width * 0.3,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 35,
    marginTop: 20,
  },
  subtitle: {
    fontFamily: "outfit",
    fontSize: 22,
    marginTop: 10,
    color: Colors.GRAY,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontFamily: "outfit-medium",
    fontSize: 20,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
    marginTop: 4,
  },
  registerButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 30,
    marginTop: 20,
  },
  registerButtonText: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: "center",
  },
  alternateLoginText: {
    textAlign: "center",
    fontFamily: "outfit",
    fontSize: 18,
    marginTop: 20,
    color: Colors.GRAY,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    padding: 15,
    borderRadius: 20,
  },
  icon: {
    height: 40,
    width: 40,
  },
  footerText: {
    fontFamily: "outfit",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  registerLink: {
    color: Colors.PRIMARY,
  },
});
