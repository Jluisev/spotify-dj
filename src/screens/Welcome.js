import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'
import sharedStyles from '../styles'
import { initSpotify, login } from '../actions'

class Welcome extends Component {
  componentDidMount() {
    this.props.initSpotify()
  }

  handleGetStarted = () => {
    this.props.login()
    //this.props.navigation.navigate('auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source= {{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png'
          }}
        />
        <Text style={styles.mainText}>Welcome to Spotify DJ</Text>
        <Button
          large
          backgroundColor="#1db954"
          title="Get Sarted"
          rounded
          onPress={this.handleGetStarted}
          fontSize={16}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...sharedStyles,
  buttonStyle: {
    height: 40,
    marginTop: 25
  },
  imageStyle: {
    height: 60,
    width: 60,
    marginBottom: 15
  }
})

export default connect(null, { initSpotify, login })(Welcome)
