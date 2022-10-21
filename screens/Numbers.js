import React, {  useState } from 'react';
import { View, Text, FlatList, RefreshControl, Image, StyleSheet, ActivityIndicator, SliderComponent, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as Speech from 'expo-speech'

export default function Numbers() {
  
  const [isLoading, setIsLoading] = useState(true)
  
  const [items, setItems] = React.useState();


  const fetchItems = () => {
    setIsLoading(true)
    axios.get('https://634e42e9f34e1ed82686b739.mockapi.io/api/numbers').
    then(({data}) => {
      setItems(data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
      alert('Ошибка при получении данных')
    })
    
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
