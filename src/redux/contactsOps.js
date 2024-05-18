import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://663f2632e3a7c3218a4c3cc7.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
  "fetchAllContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // fulfilled
      return response.data;
    } catch (error) {
      // rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterContact = createAsyncThunk(
  "filterContacts",
  async (query, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      const filteredContacts = response.data.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
      return filteredContacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
