import { useSelector } from 'react-redux'

export const Result = () => {
  let result = useSelector((s) => s.weather)

  return (
    <div className="containery">
      <div className="cardy shadowy">
        <div className="card__bodyy">
          <h3>
            {' '}
            City : {result?.lastSearchResult?.location?.name} <br />
          </h3>
          <h3>
            {' '}
            Country : {result?.lastSearchResult?.location?.country} <br />
          </h3>
          <h3>
            {' '}
            Temperature : {result?.lastSearchResult?.current?.temp_c} °C
            <br />
          </h3>
          <h3>
            {' '}
            Humidity : {result?.lastSearchResult?.current?.humidity}
            <br />
          </h3>
          <h3>
            {' '}
            Cloudy : {result?.lastSearchResult?.current?.cloud}
            <br />
          </h3>
          <h3>
            {' '}
            {result?.lastSearchResult?.current?.condition?.text}
            <br />
          </h3>
          <img className="photo" src={result.lastSearchResult?.current?.condition.icon} alt="" />
        </div>
      </div>
    </div>
  )
}
