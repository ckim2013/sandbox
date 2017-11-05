import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button,
  Image
} from 'react-native';

class ThirdPane extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeId: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(text) {
    this.setState({ pokeId: text} );
  }

  handleSubmit() {
    this.props.fetchImage(this.state);
  }

  render() {
    let pokeImg = <View></View>;

    if (this.props.pokeUrl) {
      pokeImg = <Image source={ { uri: this.props.pokeUrl } }
                       style={{width: 100, height: 100}} />;
    }

    return (
      <View>
        <Text>
          Please input a pokemon ID!
        </Text>
        <TextInput placeholder='Please input a pokemon ID!'
                   onChangeText={ this.handleChange }/>

        <Button title='Search!'
                onPress={ this.handleSubmit }/>

        { pokeImg }
      </View>
    );
  }

}

export default ThirdPane;
