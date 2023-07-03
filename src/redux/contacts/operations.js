import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      Notify.failure(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      Notify.failure(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      Notify.success(
        `"${response.data.name}" phone number has been successfully deleted from the contacts book.`
      );
      return response.data;
    } catch (e) {
      Notify.failure(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
