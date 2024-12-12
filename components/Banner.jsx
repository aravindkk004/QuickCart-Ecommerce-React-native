import { View, Text, FlatList, Image, useWindowDimensions } from "react-native";
import React from "react";

export default function Banner() {
  const { width, height } = useWindowDimensions();
  const data = [
    require("./../assets/images/products/online.jpg"),
    require("./../assets/images/products/onlineshop.jpg"),
    require("./../assets/images/products/shoes.jpg"),
    require("./../assets/images/products/headset.jpg"),
    require("./../assets/images/products/iq.jpg"),
    require("./../assets/images/products/mobil.jpg"),
    require("./../assets/images/products/mobiles.jpg"),
    require("./../assets/images/products/shop.jpg"),
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
              marginRight: 3
            }}
          >
            <Image source={item} style={{ height: 160, width: 320, borderRadius: 20, backgroundImage: 'object-cover' }} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}
