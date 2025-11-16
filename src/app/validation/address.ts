import * as yup from "yup"

export const addressRegex = /^[A-Za-z0-9\s,.'-]+$/;

export const addressSchema = yup.object({
    addressLine1: yup
      .string()
      .required("Address line 1 is required")
      .matches(addressRegex, "No special characters allowed"),
  
    addressLine2: yup
      .string()
      .required("Address line 2 is required")
      .matches(addressRegex, "No special characters allowed"),
  
    town: yup
      .string()
      .required("Town / City is required")
      .matches(addressRegex, "No special characters allowed"),
  
    county: yup
      .string()
      .required("County is required")
      .matches(addressRegex, "No special characters allowed"),
  });

export type AddressFormValues = yup.InferType<typeof addressSchema>;
