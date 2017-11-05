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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  canvas: {
    position: 'absolute',
    left: 0,
    right: 0
  }
});


class FirstPane extends React.Component {
  render() {
    const width = Dimensions.get('window').width, height = Dimensions.get('window').height;
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{backgroundColor:'yellow'}}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to Momo House!
            </Text>
            <Text style={styles.instructions}>
              This
            </Text>
            <Text style={styles.instructions}>
              App
            </Text>
            <Text style={styles.instructions}>
              Is
            </Text>
            <Text style={styles.instructions}>
              So
            </Text>
            <Text style={styles.instructions}>
              Cool!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Text style={styles.instructions}>
              COOOOOOOl!
            </Text>
            <Image source={{uri: 'https://res.cloudinary.com/skybnb/image/upload/c_scale,h_1000,w_1680/download_v8bj6d.jpg'}}
              style={{width, height}} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FirstPane;
