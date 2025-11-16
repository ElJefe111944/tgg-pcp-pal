import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PersonalDetailsState {
    title: string;
    firstName: string;
    surname: string;
    dobDay: string;
    dobMonth: string;
    dobYear: string;
}

const initialState: PersonalDetailsState = {
    title: "",
    firstName: "",
    surname: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
};

const personalDetailsSlice = createSlice({
    name: "personalDetails",
    initialState,
    reducers: {
        setPersonalDetails(
            state,
            action: PayloadAction<PersonalDetailsState>
        ) {
            state.title = action.payload.title;
            state.firstName = action.payload.firstName;
            state.surname = action.payload.surname;
            state.dobDay = action.payload.dobDay;
            state.dobMonth = action.payload.dobMonth;
            state.dobYear = action.payload.dobYear;
        },
    },
});

export const { setPersonalDetails } = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;