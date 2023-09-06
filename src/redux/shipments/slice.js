import { createSlice } from '@reduxjs/toolkit';
import {
  getAllShipments,
  deleteShipment,
  changeShipmentData,
} from './operations';
import { initialState } from './initial-state';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ingredientsSlice = createSlice({
  name: 'shipmentsList',
  initialState: initialState,
  extraReducers: {
    [getAllShipments.pending]: handlePending,
    [changeShipmentData.pending]: handlePending,
    [deleteShipment.pending]: handlePending,
    [getAllShipments.rejected]: handleRejected,
    [changeShipmentData.rejected]: handleRejected,
    [deleteShipment.rejected]: handleRejected,
    [getAllShipments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.shipments = action.payload;
    },
    [changeShipmentData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
       const index = state.shipments.findIndex(
        shipment => shipment.id === action.payload.id
      );
        state.shipments[index] = action.payload;
    },
    [deleteShipment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.ingredients.findIndex(
        ingredient => ingredient.newId === action.payload.newId
      );
      state.ingredients.splice(index, 1);
    },
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;