import React, { Component } from 'react'
import { View, Text } from 'react-native'
import sharedStyles from '../styles'

class Playlist extends Component {
  render() {
    return (
      <View style={sharedStyles.container}>
        <Text style={sharedStyles.mainText}>
          Playlist screen
        </Text>
      </View>
    )
  }
}

export default Playlist
