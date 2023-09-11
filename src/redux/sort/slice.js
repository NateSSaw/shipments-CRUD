import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        sortedList: []
    },
    reducers: {
        sortShipmentsData: (state, action) => {
            state.sortedList = action.payload;
        },
    },
});

export const { sortShipmentsData } = sortSlice.actions;

export const sortReducer = sortSlice.reducer;