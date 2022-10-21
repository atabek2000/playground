import React, { Component, useState } from 'react';
import { View, Text, FlatList, RefreshControl, Image, StyleSheet, ActivityIndicator, SliderComponent, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as Speech from 'expo-speech'

export default function Fruits() {
  
  const [isLoading, setIsLoading] = useState(true)
  
  const [items, setItems] = React.useState();


  const fetchItems = () => {
    setIsLoading(true)
    const data = [
        {
            id: 1,
            name: 'apple',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/apple-3860991_960_720.jpg'
        },
        {
            id: 2,
            name: 'apricot',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/apricots-.jpg?w=1078&ssl=1'
        },
        {
            id: 3,
            name: 'banana',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/banana-2449019.jpg?w=913&ssl=1'
        },
        {
            id: 4,
            name: 'blackberry',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/blackberry-446427_640.jpg?w=640&ssl=1'
        },
        {
            id: 5,
            name: 'rose Apple',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/rose-apple-3228807_640.jpg?w=640&ssl=1'
        },
        {
            id: 6,
            name: 'coconut',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/images.jpg?resize=253%2C199&ssl=1'
        },
        {
            id: 7,
            name: 'cherry',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/cherries-.jpg?w=1130&ssl=1'
        },
        {
            id: 8,
            name: 'date fruit',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/date-4488543.jpg?w=1205&ssl=1'
        },
        {
            id: 9,
            name: 'fig',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/fig-.jpg?w=801&ssl=1'
        },
        {
            id: 10,
            name: 'kiwi',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/breakfast-.jpg?w=1114&ssl=1'
        },
        {
            id: 11,
            name: 'lemon',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/food-12392.jpg?w=952&ssl=1'
        },
        {
            id: 12,
            name: 'mango fruit',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/food-1239241_640.jpg?w=640&ssl=1'
        },
        {
            id: 13,
            name: 'pineapple',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/pineapple-25246.jpg?w=686&ssl=1'
        },
        {
            id: 14,
            name: 'strawberry',
            image: 'https://i0.wp.com/howtamil.com/wp-content/uploads/2022/03/strawberries-3089148_640.jpg?w=640&ssl=1'
        },
        
    ]
    setItems(data)
    setIsLoading(false)
    
  }

  const styles = StyleSheet.create({
    imageView: {
      margin: 10,
      aspectRatio: 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    itemView: {
      width: '100%'
    },
    itemFlatList: {
      flexDirection: 'column'
    },
    touchView: {
      width: '50%'
    }
  })

  React.useEffect(fetchItems, [])
  
  if (isLoading) {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large"/>
      <Text>Загрузка...</Text>
    </View>
  }

  
  return (
    <View>
      <FlatList
      numColumns={2}
      style={styles.itemFlatList}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchItems}/>}
      data={items}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.touchView} onPress={() => Speech.speak(item.name)}>
          <View style={styles.itemView}>
            <Image style={styles.imageView} source={{uri: item.image}}></Image>
          </View>
        </TouchableOpacity>
      )
      }
      />
    </View>
  );
  
}
