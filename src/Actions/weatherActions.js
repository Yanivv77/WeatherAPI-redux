import { WEATHER_SEARCH } from '../Constants/weatherConstants'
import { WEATHER_ADD_TO_HISTORY } from '../Constants/weatherConstants'

export const SearchAction = (data) => {
  return { type: WEATHER_SEARCH, data: data }
}
export const addToHistoryAction = (data) => {
  return { type: WEATHER_ADD_TO_HISTORY, data: data }
}
