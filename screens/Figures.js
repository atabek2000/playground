// керекті кітапханаларды жүктеп аламыз
import React, { useState } from 'react';
import { View, Text, FlatList, RefreshControl, Image, StyleSheet, ActivityIndicator, SliderComponent, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech'

export default function Figures() {
  
  const [isLoading, setIsLoading] = useState(true)
  
  const [items, setItems] = React.useState();

 // ойын деректеріні беруге функция
  const fetchItems = () => {
    setIsLoading(true)
    const data = [
        {
            id: 1,
            name: 'circle',
            image: 'https://cdn1.byjus.com/wp-content/uploads/2020/08/ShapeArtboard-1.png'
        },
        {
            id: 2,
            name: 'rectangle',
            image: 'https://cdn1.byjus.com/wp-content/uploads/2020/08/ShapeArtboard-1-copy-5.png'
        },
        {
            id: 3,
            name: 'triangle',
            image: 'https://cdn1.byjus.com/wp-content/uploads/2020/08/ShapeArtboard-1-copy-3.png'
        },
        {
            id: 4,
            name: 'trapezium',
            image: 'https://cdn1.byjus.com/wp-content/uploads/2020/08/ShapeArtboard-1-copy-8.png'
        },
        {
            id: 5,
            name: 'rhombus',
            image: 'https://cdn1.byjus.com/wp-content/uploads/2020/08/ShapeArtboard-1-copy-7.png'
        },
        {
            id: 6,
            name: 'oval',
            image: 'https://cdn1.byjus.com/wp-content/uploads/2020/08/ShapeArtboard-1-copy-2.png'
        },
        {
            id: 7,
            name: 'Square',
            image: 'https://cdn1.byjus.com/wp-content/uploads/2020/08/ShapeArtboard-1-copy-4.png'
        },
        {
            id: 8,
            name: 'parallelogram',
            image: 'https://cdn1.byjus.com/wp-content/uploads/2020/08/ShapeArtboard-1-copy-6.png'
        },
    ]
    setItems(data)
    setIsLoading(false)
    
  }

  // стилдерді береміз
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
   // декректер жүктеліп жатқанда көрсетілетін анимация
  if (isLoading) {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large"/>
      <Text>Загрузка...</Text>
    </View>
  }

  // ойын карталары бар бет
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
