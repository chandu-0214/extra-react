import { createSlice } from "@reduxjs/toolkit";




const counterSlices = createSlice({
    name: 'counter',
    initialState:0,
    reducers:{
        INCREMENT : (state,action)=>{
            console.log(state,action);
            return state+action.payload
        },
        DECREMENT : (state,action)=>{
            console.log(state,action);
            return state-action.payload
        },
        RESET : (state,action)=>{
            console.log(state,action);
            return 0
        }
    }
})

export const {INCREMENT,DECREMENT,RESET} = counterSlices.actions

export default counterSlices.reducer