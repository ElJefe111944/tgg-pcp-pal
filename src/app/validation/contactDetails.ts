import * as yup from "yup";

export const contactDetailsSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  mobile: yup
    .string()
    .matches(/^[0-9+\s-]+$/, "Invalid phone number format")
    .required("Mobile number is required"),
});

export type ContactDetailsFormValues = yup.InferType<typeof contactDetailsSchema>;
