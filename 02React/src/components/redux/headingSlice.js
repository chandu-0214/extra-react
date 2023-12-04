import { createSlice } from "@reduxjs/toolkit";


const headingSlices = createSlice({
    name: 'heading',
    initialState:"Counter Redux",
    reducers:{
        CHANGE_HEADING : (state,action)=>{
            return action.payload
            
        },
    }
})

export const {CHANGE_HEADING} = headingSlices.actions

export default headingSlices.reducer