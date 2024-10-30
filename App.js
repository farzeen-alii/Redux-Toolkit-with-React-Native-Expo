import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import First from './src/First'
import store from './src/store/store'

const App = () => {
  return (
    <Provider store={store} >
      <First />
    </Provider>
  )
}

export default App