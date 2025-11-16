"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const addressSchema = yup.object({
    addressLine1: yup.string().required("Address line 1 is required"),
    addressLine2: yup.string().required("Address line 2 is required"),
    town: yup.string().required("Town / City is required"),
    county: yup.string().required("County is required"),
  });

  type AddressFormValues = yup.InferType<typeof addressSchema>;

export function AddressForm(){

    const { 
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting }
     } = useForm<AddressFormValues>({
        resolver: yupResolver(addressSchema),
        mode: "onChange",

     })

     const onSubmit = () => {

     };

     const inputStyles = () => "h-[50px] bg-[#F1F1F2] p-1.5 text-[16px] border-r-2";

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full flex flex-col gap-2.5">
            <input className={`${inputStyles} h-[50px]`} type="text" id="addressLine1" {...register("addressLine1")} placeholder="Address Line 1" />
            <input className={`${inputStyles} h-[50px]`} type="text" id="addressLine2" {...register("addressLine2")} placeholder="Address Line 2" />
            <input className={`${inputStyles} h-[50px]`} type="text" id="town" {...register("town")} placeholder="Town/City" />
            <input className={`${inputStyles} h-[50px]`} type="text" id="county" {...register("county")} placeholder="County" />
            <p>Please check the details above are correct before continuing.</p>
            <button className={`flex flex-row gap-2.5 justify-center items-center h-[50px] ${!isValid || isSubmitting ? "bg-[#B8B8BE]" : "bg-[#FF004F]"} text-white text-[15px] leading-6`} disabled={!isValid || isSubmitting}><span>Next</span> <Image src={"/images/address/arrow-right.png"} width={7} height={12.44} alt="Next" /></button>
        </form>
    )
}