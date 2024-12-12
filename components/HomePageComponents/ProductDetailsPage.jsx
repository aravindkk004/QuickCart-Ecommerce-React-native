import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";

export default function ProductDetailsPage() {
  const { details } = useSearchParams();
  const parsedDetails = JSON.parse(details);
  return (
    <View>
      <Text>{parsedDetails.id}</Text>
    </View>
  );
}
