import { useSelector, useDispatch } from 'react-redux'
import { getUserInput } from './selectors/userInputSelector'

export default function hook() {
  const userInput = useSelector(getUserInput)
  const dispatch = useDispatch()
  const setUserInput = payload => dispatch({ type: 'SET_USER_INPUT', payload })
  return [userInput, setUserInput]
}
