import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const windowSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggle: (state, actions) => {
      state.title = actions.payload?.title;
      state.message = actions.payload?.message;
      state.visible = !state.visible;
      state.popupFunc = actions.payload?.func;
      state.buttonTitle = actions.payload?.buttonTitle;
    },
  },
});

export const { toggle } = windowSlice.actions;
export default windowSlice.reducer;
