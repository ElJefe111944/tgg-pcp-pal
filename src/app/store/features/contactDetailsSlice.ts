import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactDetailsState {
    email: string;
    mobile: string;
}

const initialState: ContactDetailsState = {
    email: "",
    mobile: "",
};

const contactDetailsSlice = createSlice({
    name: "contactDetails",
    initialState,
    reducers: {
        setContactDetails(
            state,
            action: PayloadAction<ContactDetailsState>
        ) {
            state.email = action.payload.email;
            state.mobile = action.payload.mobile;
        },
    },
});

export const { setContactDetails } = contactDetailsSlice.actions;
export default contactDetailsSlice.reducer;