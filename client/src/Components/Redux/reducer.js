import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
 employeDetails:''
};


const employeSlice = createSlice({
    name:"employe",
    initialState:INITIAL_STATE,
    reducers: {
        employeAllDetails:(state,action)=>{
            let {employeDetails} = state;
            employeDetails = action.payload;
            return {...state,employeDetails}
        },
        clearAllDetails:(state,action)=>{
            let {employeDetails} = state;
            employeDetails = false;
            return {...state,employeDetails};
        }
    }
})

export const {employeAllDetails,clearAllDetails} = employeSlice.actions;

export default employeSlice.reducer;