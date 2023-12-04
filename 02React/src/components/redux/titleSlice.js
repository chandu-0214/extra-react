import { createSlice } from "@reduxjs/toolkit";


const titleSlices = createSlice({
    name: 'title',
    initialState:"",
    reducers:{
        CHANGE_TITLE : (state,action)=>{
            console.log(action)
            // bacticks
            return `I am ${action.payload.name},belongs ${action.payload.city}`
            
        },
    }
})

export const {CHANGE_TITLE} = titleSlices.actions

export default titleSlices.reducer