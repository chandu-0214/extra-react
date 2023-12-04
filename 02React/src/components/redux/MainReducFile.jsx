import React from 'react'
import { Provider } from 'react-redux'
import appStore from './appStore'
import CounterRedux from './CounterRedux'

const MainReducFile = () => {
  return (
    <div>
         <Provider store={appStore}>
        <CounterRedux/>
        </Provider>
    </div>
  )
}

export default MainReducFile