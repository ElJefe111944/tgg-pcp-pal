import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./features/addressSlice";
import personalDetailsReducer from "./features/personalDetailsSlice";

export const store = configureStore({
    reducer: {
        address: addressReducer,
        personalDetails: personalDetailsReducer

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;