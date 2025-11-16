import * as yup from "yup";

const nameRegex = /^[A-Za-z\s'-]+$/;

export const personalDetailsSchema = yup.object({
  title: yup
    .string()
    .oneOf(["Mr", "Mrs", "Miss", "Ms", "Dr", "Other"], "Select a valid title")
    .required("Title is required"),

  firstName: yup
    .string()
    .required("First name is required")
    .matches(nameRegex, "Only letters and basic characters allowed"),

  surname: yup
    .string()
    .required("Surname is required")
    .matches(nameRegex, "Only letters and basic characters allowed"),

  dobDay: yup
    .string()
    .required("Day is required")
    .matches(/^(0?[1-9]|[12][0-9]|3[01])$/, "Enter a valid day (01–31)"),

  dobMonth: yup
    .string()
    .required("Month is required")
    .matches(/^(0?[1-9]|1[0-2])$/, "Enter a valid month (01–12)"),

  dobYear: yup
    .string()
    .required("Year is required")
    .matches(/^(19[0-9]{2}|20[0-2][0-9])$/, "Enter a valid year"),
});


export type PersonalDetailsFormValues = {
  title: string;
  firstName: string;
  surname: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
};
