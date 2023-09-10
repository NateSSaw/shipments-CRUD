import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://64f8a783824680fd217fe46c.mockapi.io';


export const getAllShipments = createAsyncThunk(
  'shipments/getAllShipments',

    async (page, thunkAPI) => {
    
      try {
        const { data } = await axios.get(`/shipments?page=${page}&limit=10`);

      if (data.length === 0)
        return thunkAPI.rejectWithValue({ message: 'Shipments list is empty' });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteShipment = createAsyncThunk(
  'shipments/deleteShipment',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/shipments/${id}`);

      return {...data,  id };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeShipmentData = createAsyncThunk(
  "shipments/changeShipmentData",
  async (formData , thunkAPI) => {
    try {
      const { data } = await axios.put(`/shipments/${formData.id}`, formData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);