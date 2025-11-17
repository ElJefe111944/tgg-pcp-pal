import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./features/addressSlice";
import personalDetailsReducer from "./features/personalDetailsSlice";
import contactDetailsReducer from "./features/contactDetailsSlice";

export const store = configureStore({
    reducer: {
        address: addressReducer,
        personalDetails: personalDetailsReducer,
        contactDetails: contactDetailsReducer

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;