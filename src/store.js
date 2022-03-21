import { reducerWeather } from './Reducers/weatherReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  weather: reducerWeather,
})

export default allReducers
