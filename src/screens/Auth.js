import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import sharedStyles from '../styles'
import {login} from '../actions'

class Auth extends Component {
  componentDidMount() {
    this.props.login()
  }

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

export default connect(null, {login})(Auth)
