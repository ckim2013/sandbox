import React, { Component } from 'react';
import FirstPane from './app/components/first_pane';
import SecondPane from './app/components/second_pane';
import ThirdPaneContainer from './app/components/third_pane_container';
import { configureStore } from './app/store/configure_store';
import { Provider } from 'react-redux';
import { View } from 'react-native';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={ store }>
      <View style={{flex: 1}}>

        <View style={{flex: 1}}>
          <FirstPane />
        </View>

        <View style={{flex: 1}}>
          <SecondPane />
        </View>

        <View style={{flex: 1}}>
          <ThirdPaneContainer />
        </View>
      </View>
    </Provider>
  );
};

export default App;
