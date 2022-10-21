import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList, RefreshControl, StyleSheet, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native'
import Card from '../components/Card';


// const CardBlock = styled.View`
//     padding: 10px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     flex-wrap: wrap;
// `

const styles = StyleSheet.create({
  flatList: {
    padding: 10,
    width: '100%',
    flexDirection: 'column'

  }
})


export default function MainScreen({navigation}) { 
  
  const [isLoading, setIsLoading] = useState(true)
  
  const [games, setGames] = React.useState();


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

  useEffect(fetchGames, [])
    
    if (isLoading) {
      return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
        <Text>Загрузка...</Text>
      </View>
    }

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
