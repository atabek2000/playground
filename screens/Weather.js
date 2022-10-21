import React, {  useState } from 'react';
import { View, Text, FlatList, RefreshControl, Image, StyleSheet, ActivityIndicator, SliderComponent, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech'

export default function Weathers() {
  
  const [isLoading, setIsLoading] = useState(true)
  
  const [items, setItems] = React.useState();


  const fetchItems = () => {
    setIsLoading(true)
    const data = [
        {
            id: 1,
            name: 'sunny',
            image: 'https://games4esl.com/wp-content/uploads/1-7.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 2,
            name: 'cloudy',
            image: 'https://games4esl.com/wp-content/uploads/2-3.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 3,
            name: 'rainy',
            image: 'https://games4esl.com/wp-content/uploads/4-2.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 4,
            name: 'snowy',
            image: 'https://games4esl.com/wp-content/uploads/5-2.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 5,
            name: 'windy',
            image: 'https://games4esl.com/wp-content/uploads/3-3.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 6,
            name: 'stormy',
            image: 'https://games4esl.com/wp-content/uploads/7-2.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 7,
            name: 'sleet',
            image: 'https://games4esl.com/wp-content/uploads/6-2.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 8,
            name: 'hot',
            image: 'https://games4esl.com/wp-content/uploads/8-2.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 9,
            name: 'cold',
            image: 'https://games4esl.com/wp-content/uploads/9-2.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        },
        {
            id: 10,
            name: 'humid',
            image: 'https://games4esl.com/wp-content/uploads/10-2.png?ezimgfmt=rs:300x300/rscb196/ng:webp/ngcb196'
        }
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
