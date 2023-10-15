import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "popup",
  title: "Напишите титул попапа",
  message: "Сообщение попапа не наcтроена",
  visible: false,
  buttonTitle: "Кнопка не настроена",
  popupFunc: () => {
    console.log("Установите сообщение");
  },
};

const popupSlice = createSlice({
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

export const { toggle } = popupSlice.actions;
export default popupSlice.reducer;
