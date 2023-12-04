import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"
import headingReducer from "./headingSlice"
import titleReducer from './titleSlice'




const appStore = configureStore({
    reducer:{
        counter:counterReducer,
        heading:headingReducer,
        title:titleReducer
    }
}

)

export default appStore