import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const transferSlice = createSlice({
    name: 'transfers',
    initialState: {
        list: [],
    },
    reducers: {
        setTransferList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const {setTransferList} = transferSlice.actions;

export default transferSlice.reducer;

export const fetchAllTransfers = () => (dispatch) => {
    axios.get('https://reqres.in/api/users?page=2')
    .then((resp)=>{
        dispatch(setTransferList (resp.data.data));
    }).catch((err)=> console.log(err));
}