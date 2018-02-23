import React, { Component } from 'react'
import { View, Text } from 'react-native'
import sharedStyles from '../styles'

class Auth extends Component {
  render() {
    return (
      <View style={sharedStyles.container}>
        <Text style={sharedStyles.mainText}>
          Auth screen
        </Text>
      </View>
    )
  }
}

export default Auth
