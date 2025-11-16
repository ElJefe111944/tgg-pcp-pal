import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressState {
    postcode: string;
    addressLine1: string;
    addressLine2: string;
    town: string;
    county: string;
}

const initialState: AddressState = {
    postcode: "",
    addressLine1: "",
    addressLine2: "",
    town: "",
    county: "",
}

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setPostcode(state, action: PayloadAction<string>) {
            state.postcode = action.payload;
        },
        setAddress(
            state, action: PayloadAction<Omit<AddressState, "postcode">>
        ) {
            state.addressLine1 = action.payload.addressLine1;
            state.addressLine2 = action.payload.addressLine2;
            state.town = action.payload.town;
            state.county = action.payload.county
        }
    }
});

export const { setPostcode, setAddress } = addressSlice.actions;
export default addressSlice.reducer;