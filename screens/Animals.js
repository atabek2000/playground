// керекті кітапханаларды жүктеп аламыз
import React, { useState } from 'react'; // реакт кітапханасыа алынатын модульдер
// react native кітапханасынан алынатын модульдер
import { View, Text, FlatList, RefreshControl, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'; 
// View - html дегі div ке ұқсас блок
// Text - тексттік мәндерді шығаруға арналған блок
// FlatList - айналдырылатын элементтер блогы
// RefreshControl - қосымшаны жаңарту блогы
// Image - сүреттерді шығаруға арналған блок 
// StyleSheet - стильдерді беруге арналған функция
// TouchableOpacity - басылатын (таңдалатын) элементтерді жасау блогы

import axios from 'axios'; // серверге сұрау жіберу үшін қолданылатын модул
import * as Speech from 'expo-speech' // текстті сөзге айналдыруға арналған модул

export default function Animals() {
  
  const [isLoading, setIsLoading] = useState(true)
  
  const [items, setItems] = React.useState();

  // ойын деректеріні серверден алуға арналған функция
  const fetchItems = () => {
    setIsLoading(true)
    axios.get('https://634e42e9f34e1ed82686b739.mockapi.io/api/animals').
    then(({data}) => {
      setItems(data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
      alert('Ошибка при получении данных')
    })
    
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

  // ойын карталараы бар бет
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
