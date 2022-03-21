import { WEATHER_SEARCH } from '../Constants/weatherConstants'
import { WEATHER_ADD_TO_HISTORY } from '../Constants/weatherConstants'

export const reducerWeather = (state, action) => {
  console.log('reducer')
  console.log(state)
  console.log(action)
  const resetO = { lastSearchResult: {}, history: [], refresh: 0 }
  if (state === 0) {
    state = resetO
  }

  let tmp = {}

  switch (action.type) {
    case WEATHER_SEARCH:
      Object.assign(tmp, state)
      Object.assign(tmp.lastSearchResult, action.data)

      return tmp

    case WEATHER_ADD_TO_HISTORY:
      Object.assign(tmp, state)
      tmp.history.push(action.data)
      return tmp

    default:
      return 0
  }
}
