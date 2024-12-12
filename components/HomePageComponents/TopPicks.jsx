import { View, Text, FlatList } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";

export default function TopPicks() {
  const datas = [
    {
      id: 1,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNKxcJRGWKHnhSg0AjpLYIUjkFqyijQwPfcB5ITN2NQGYU5QsEJDK7tNnfqgIM-X5y6_tDi6HiPNMx3T1odvfcgKl8w0Uhn0nzRTuS7dmC-piubHdjRkiK6pI4apKPdqVTqmWcUg&usqp=CAc",
      category: ["Mobiles", "smart phones"],
      price: "10,899",
      rating: "4.4",
      ratingCount: 200,
      title: "IPhone 16 Pro",
    },
    {
      id: 2,
      imgUrl:
        "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
      category: ["Shoes", "nike"],
      price: "1299",
      rating: "4.9",
      ratingCount: 400,
      title: "Nike Shoe",
    },
    {
      id: 1,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNKxcJRGWKHnhSg0AjpLYIUjkFqyijQwPfcB5ITN2NQGYU5QsEJDK7tNnfqgIM-X5y6_tDi6HiPNMx3T1odvfcgKl8w0Uhn0nzRTuS7dmC-piubHdjRkiK6pI4apKPdqVTqmWcUg&usqp=CAc",
      category: "Mobiles",
      price: "10,899",
      rating: "4.4",
      ratingCount: 200,
      title: "IPhone 16 Pro",
    },
    {
      id: 2,
      imgUrl:
        "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
      category: "Shoes",
      price: "1299",
      rating: "4.9",
      ratingCount: 400,
      title: "Nike Shoe",
    },
    {
      id: 1,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNKxcJRGWKHnhSg0AjpLYIUjkFqyijQwPfcB5ITN2NQGYU5QsEJDK7tNnfqgIM-X5y6_tDi6HiPNMx3T1odvfcgKl8w0Uhn0nzRTuS7dmC-piubHdjRkiK6pI4apKPdqVTqmWcUg&usqp=CAc",
      category: "Mobiles",
      price: "10,899",
      rating: "4.4",
      ratingCount: 200,
      title: "IPhone 16 Pro",
    },
    {
      id: 2,
      imgUrl:
        "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
      category: "Shoes",
      price: "1299",
      rating: "4.9",
      ratingCount: 400,
      title: "Nike Shoe",
    },
    {
      id: 1,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNKxcJRGWKHnhSg0AjpLYIUjkFqyijQwPfcB5ITN2NQGYU5QsEJDK7tNnfqgIM-X5y6_tDi6HiPNMx3T1odvfcgKl8w0Uhn0nzRTuS7dmC-piubHdjRkiK6pI4apKPdqVTqmWcUg&usqp=CAc",
      category: "Mobiles",
      price: "10,899",
      rating: "4.4",
      ratingCount: 200,
      title: "IPhone 16 Pro",
    },
    {
      id: 2,
      imgUrl:
        "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
      category: "Shoes",
      price: "1299",
      rating: "4.9",
      ratingCount: 400,
      title: "Nike Shoe",
    },
  ];
  const key = `flatlist-columns-${2}`;
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 22 }}>
        Top Picks For You
      </Text>
      <View style={{width: "100%" }}>
        <FlatList
          key={key}
          keyExtractor={(item, index) => index.toString()}
          style={{
            marginTop: 10,
            marginBottom: 50
          }}
          numColumns={2}
          data={datas}
          renderItem={({ item, index }) => (
            <View style={{ width: "50%" }}>
              <ItemCard details={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
}
