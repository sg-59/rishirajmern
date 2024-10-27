import {createSlice} from "@reduxjs/toolkit"

const LoginInfo=createSlice({
    name:"login",
    initialState:{
        loginData:null
    },

    reducers:{
        addtoLogindata:(state,action)=>{
state.loginData=action.payload
        },
        removedata:(state,action)=>{
            state.loginData=null
        }
    }
})

export const {addtoLogindata,removedata}=LoginInfo.actions
export default LoginInfo.reducer