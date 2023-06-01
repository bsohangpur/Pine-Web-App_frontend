import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import link from './base_link';
import axios from 'axios';

const url = `${link}/token/`

export const userAuth = createAsyncThunk('user/post/auth', async (data, thunkAPI)=>{
    const res = await axios.post(url, data);
    return res;
})

const authSlice=createSlice({
    name:'auth',
    initialState:{
        status:'loading',
        loading:false,
        message:'',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(userAuth.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(userAuth.fulfilled, (state, action)=>{
            state.status = action.payload.status
            state.message = action.payload.message
            state.loading = false
        })
        builder.addCase(userAuth.rejected, (state, action)=>{
            state.error = action.error.message
            state.loading = false
        })
    }
})

export default authSlice.reducer;