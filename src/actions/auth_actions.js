import { initSpotifyAPI, loginAPI } from '../api'

export const initSpotify = () => async dispatch => {
  await initSpotifyAPI()
}

export const login = () => async dispatch => {
  await loginAPI()
}
