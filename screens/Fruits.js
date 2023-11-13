import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Image,
  StyleSheet,
  ActivityIndicator,
  SliderComponent,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";

export default function Fruits() {
  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = React.useState();

  const fetchItems = () => {
    setIsLoading(true);
    const data = [
      {
        id: 1,
        name: "apple",
        image:
          "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
      },
      {
        id: 2,
        name: "apricot",
        image:
          "https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/apricots-.jpg?w=1078&ssl=1",
      },
      {
        id: 3,
        name: "banana",
        image:
          "https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/banana-2449019.jpg?w=913&ssl=1",
      },
      {
        id: 4,
        name: "blackberry",
        image:
          "https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/blackberry-446427_640.jpg?w=640&ssl=1",
      },
      {
        id: 5,
        name: "rose Apple",
        image:
          "https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/rose-apple-3228807_640.jpg?w=640&ssl=1",
      },
      {
        id: 6,
        name: "coconut",
        image:
          "https://s3.eu-west-1.amazonaws.com/assets.saps.org.uk/content/uploads/2022/06/Coconut_istock.jpg",
      },
      {
        id: 7,
        name: "cherry",
        image: "https://static.libertyprim.com/files/familles/cerise-large.jpg",
      },
      {
        id: 8,
        name: "date fruit",
        image:
          "https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/date-4488543.jpg?w=1205&ssl=1",
      },
      {
        id: 9,
        name: "fig",
        image: "https://www.kosterina.com/cdn/shop/articles/figs_1800x.jpg",
      },
      {
        id: 10,
        name: "kiwi",
        image:
          "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
      },
      {
        id: 11,
        name: "lemon",
        image:
          "https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/food-12392.jpg?w=952&ssl=1",
      },
      {
        id: 12,
        name: "mango fruit",
        image:
          "https://cdn11.bigcommerce.com/s-kgo23u8qny/images/stencil/1280x1280/products/169/447/Mango__88774.1586024261.jpg",
      },
      {
        id: 13,
        name: "pineapple",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2017/07/pineapple-6ee23f3.jpg",
      },
      {
        id: 14,
        name: "strawberry",
        image:
          "https://images.healthshots.com/healthshots/en/uploads/2022/12/11195128/strawberry-1600x900.jpg",
      },
    ];
    setItems(data);
    setIsLoading(false);
  };

  const styles = StyleSheet.create({
    imageView: {
      margin: 10,
      aspectRatio: 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    itemView: {
      width: "100%",
    },
    itemFlatList: {
      flexDirection: "column",
    },
    touchView: {
      width: "50%",
    },
  });

  React.useEffect(fetchItems, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        numColumns={2}
        style={styles.itemFlatList}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchItems} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touchView}
            onPress={() => Speech.speak(item.name)}
          >
            <View style={styles.itemView}>
              <Image
                style={styles.imageView}
                source={{ uri: item.image }}
              ></Image>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
