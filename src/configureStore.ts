import { configureStore as configure } from '@reduxjs/toolkit'
import { Middleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const middleware: Middleware[] = [thunk]

export const configureStore = (initialState?: any) => {
  return configure({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware,
  })
}

export const store = configureStore()
