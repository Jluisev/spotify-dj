import React from 'react'
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation'
import WelcomeScreen from './screens/Welcome'
import AuthScreen from './screens/Auth'
import RoomsScreen from './screens/Rooms'
import PlaylistScreen from './screens/Playlist'

const Navigator = TabNavigator({
  welcome: {
    screen: WelcomeScreen
  },
  auth: {
    screen: AuthScreen
  },
  rooms: {
    screen: StackNavigator({
      rooms: {
        screen: RoomsScreen
      },
      playlist: {
        screen: PlaylistScreen
      }
    }, {
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#222',
          height: 40
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    })
  }
}, {
  navigationOptions: {
    tabBarVisible: false
  }
})

export default Navigator
