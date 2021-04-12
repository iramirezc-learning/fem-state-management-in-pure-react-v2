import { useReducer } from 'react'

const reducer = (previousState = {}, newState = {}) => {
  return { ...previousState, ...newState }
}

export const useSetState = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setState = (newState) => {
    dispatch(newState)
  }

  return [state, setState]
}

export default useSetState
