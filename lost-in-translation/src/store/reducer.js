import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: 0,
  name: "",
  translations: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setInitialUser: (state, action) => {
      state.name = action.payload.username;
      state.userId = action.payload.id;
      state.translations = action.payload.translations;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setTranslations: (state, action) => {
      state.translations = action.payload;
    },
    addTranslation: (state, action) => {
      let newTranslations = state.translations.slice(0);
      newTranslations.push(action.payload);
      state.translations = newTranslations;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setInitialUser, setName, setUserId, setTranslations, addTranslation } = dataSlice.actions

export default dataSlice.reducer