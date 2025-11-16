import * as yup from "yup"

export const postcodeSchema = yup.object({
    postcode: yup
      .string()
      .trim()
      .matches(
        /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i,
        "Please enter a valid UK postcode")
      .required("Postcode is required")
  });
  
export type PostCodeFormValues = yup.InferType<typeof postcodeSchema>;