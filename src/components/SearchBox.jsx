import { useEffect, useState } from 'react'
import { Button, Form, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { SearchAction, addToHistoryAction } from '../Actions/weatherActions'

export const SearchBox = () => {
  const [state, setState] = useState('London')

  const dispatchNow = useDispatch()

  let onSearchHandle = () => {
    let url = 'http://api.weatherapi.com/v1/current.json?key=254b2ff666be4fdfb84105611222103&q=' + state + '&aqi=no'

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource')
        }

        return res.json()
      })
      .then(
        (result) => {
          dispatchNow(SearchAction(result))
          dispatchNow(addToHistoryAction(result))
        },
        (error) => {
          alert(error)
        }
      )
  }

  const load = () => {
    let url = 'https://api.weatherapi.com/v1/current.json?key=92a1cc86d90849278d5211759222103&q=' + state + '&aqi=no'
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          dispatchNow(SearchAction(result))
          dispatchNow(addToHistoryAction(result))
        },

        (error) => {
          alert(error)
        }
      )
  }

  useEffect(() => {
    load()
  }, [load])

  return (
    <Form className=" d-flex">
      <Nav className="ml-auto  flex-row-reverse ">
        <Button type="submit" className="btn btn-success my-2 my-sm-0" onClick={onSearchHandle}>
          Search
        </Button>
        <Form.Control
          type="text"
          placeholder="Search City..."
          className="me-sm-2 form-control "
          onChange={(e) => {
            setState(e.target.value)
          }}
        ></Form.Control>
      </Nav>
    </Form>
  )
}

export default SearchBox
