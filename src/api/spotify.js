import Spotify from 'react-native-spotify'
import Expo from 'expo'

const REDIRECT_URL = Expo.Constants.linkingUri + "auth"
const CLIENT_ID = '7f9923f9302a41f08f59e958c2997df8'

const PERMISSION_SCOPES = [
  'playlist-read-collaborative',
  'playlist-modify-public',
  'streaming',
  'ugc-image-upload',
  'user-follow-read',
  'user-read-email',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played'
]

export const initSpotifyAPI = () => {
  Spotify.initialize({
    "clientID": CLIENT_ID,
    "redirectURL": REDIRECT_URL,
    "sessionUserDefaultsKey": 'SpotifySession',
    "scopes": PERMISSION_SCOPES
  }, (loggedIn, error) => {
    Spotify.isInitializedAsync(initialized => {
      console.log(REDIRECT_URL)
    })
  })
}

export const loginAPI = () => {
  Spotify.login((loggedIn, error) => {
    console.log(loggedIn || error)
    Spotify.getMe((result, error) => {
      console.log(result || error)
    })
  })
}
