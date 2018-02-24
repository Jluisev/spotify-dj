import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import Navigator from './src/navigator'
import store from './src/store'
import Expo from 'expo'

export default class App extends React.Component {
  render() {
    console.log(Expo.Constants.linkingUri)
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
