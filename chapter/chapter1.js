//  chapter1. Hello World

import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class HelloWorldApp extends Component{
  render() {
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Hello World!</Text>
      </View>
    )
  }
}
