// керекті кітапханаларды жүктеп аламыз
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet, ActivityIndicator } from 'react-native';
import Card from '../components/Card';

// стилдерді береміз 
const styles = StyleSheet.create({
  flatList: {
    padding: 10,
    width: '100%',
    flexDirection: 'column'

  }
})

// функцияны құрамыз 
export default function MainScreen({navigation}) { 
  // керекті айнымалылар
  const [isLoading, setIsLoading] = useState(true)
  
  const [games, setGames] = React.useState();

  // ойын атауларыны серверден алуға арналған функция
  const fetchGames = () => {
    setIsLoading(true)
    axios.get('https://634e42e9f34e1ed82686b739.mockapi.io/api/games').
    then(({data}) => {
      setGames(data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
      alert('Ошибка при получении данных')
    })
    
  }

  // ойын атауларыны серверден алу
  useEffect(fetchGames, [])
    
  // атаулары жүктеліп жатқанда көрсетілетін анимация
    if (isLoading) {
      return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
        <Text>Загрузка...</Text>
      </View>
    }

    // ойын атаулары бар бет
    return (
      <View style={{backgroundColor: 'lightblue', height: '100%'}}>
        
          <FlatList
            numColumns={2}
            style={styles.flatList}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchGames}/>}
            data={games}
            renderItem={({item}) => (
              <Card  link={item.link} navigation={navigation} text={item.name} bgcolor={item.bgcolor} color={item.color} style={{width: '100%'}}/>
            )
        }
        />
      </View>
    );  
}
