import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'




export default class Card extends Component {
    constructor(props) {
        super(props);
        
      }

      styles = StyleSheet.create({
        styledCard: {
            width: '100%',
            height: 100,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: this.props.bgcolor,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5

        },
        styledText: {
            color: this.props.color,
            fontWeight: 'bold',
            letterSpacing: 1,
            fontSize: 18
        },
        touchView: {
            width: '50%',
            height: 100,
            marginBottom: 15,
            padding: 5
        }
      }); 

  render() {
    return (
        <TouchableOpacity style={this.styles.touchView} onPress={() => this.props.navigation.navigate(this.props.text)}>
            <View style={this.styles.styledCard}>
                <Text style={this.styles.styledText}>{this.props.text}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}
