import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import sharedStyles from '../styles'

class Rooms extends Component {
  render() {
    return (
      <View style={sharedStyles.container}>
        <Button
          title="Create a new room"
          icon= {{ name: 'add-circle' }}
        />
      </View>
    )
  }
}

export default Rooms
