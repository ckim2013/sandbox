import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

class SecondPane extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'grey'}}>
        <View style={{flex: 1, height: 1000, alignItems:'center', justifyContent:'space-between'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'purple'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'magenta'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
          <Text>HELLO!</Text>
          <Text>HELLO!</Text>
          <Text>HELLO!</Text>
          <Text>HELLO!</Text>
        </View>
      </ScrollView>
    );
  }
}

export default SecondPane;
