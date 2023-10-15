import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "../features/popus/popupSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.func", "payload.popupFunc"],
        // Ignore these paths in the state
        ignoredPaths: ["payload.popupFunc"],
        ignoredPaths: ["popup.popupFunc"],
      },
    }),
  reducer: {
    popup: popupSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
