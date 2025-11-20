import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactDetailsState {
    email: string;
    mobile: string;
    signatureDataUrl?: string | null;
}

const initialState: ContactDetailsState = {
    email: "",
    mobile: "",
    signatureDataUrl: null
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
        setSignature: (state, action: PayloadAction<string | null>) => {
            state.signatureDataUrl = action.payload;
        }
    },
});

export const { setContactDetails, setSignature } = contactDetailsSlice.actions;
export default contactDetailsSlice.reducer;