import { View, Text, FlatList, Image, useWindowDimensions } from "react-native";
import React from "react";

export default function Banner() {
  const { width, height } = useWindowDimensions();
  const data = [
    require("./../assets/images/products/shoes.jpg"),
    require("./../assets/images/products/appliances.jpeg"),
    require("./../assets/images/products/grocery.jpg"),
    require("./../assets/images/products/laptops.png"),
    require("./../assets/images/products/outfit.jpg"),
    require("./../assets/images/products/phones.webp"),
    
  ];
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              borderRadius: 20,
              backgroundColor: "white",
              marginRight: 15
            }}
          >
            <Image source={item} style={{ height: 200, width: width*0.8, borderRadius: 20 }} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}
