"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema, type AddressFormValues } from "../../validation/address";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setAddress } from "@/app/store/features/addressSlice";


export function AddressForm(){

    const router = useRouter();
    const dispatch = useAppDispatch();
    const addressState = useAppSelector((state) => state.address);

    const { 
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting }
     } = useForm<AddressFormValues>({
        resolver: yupResolver(addressSchema),
        mode: "onChange",
        defaultValues: {
            addressLine1: addressState.addressLine1,
            addressLine2: addressState.addressLine2,
            town: addressState.town,
            county: addressState.county,
          },
     })

     const onSubmit = (data: AddressFormValues) => {
        dispatch(setAddress(data));
        router.push("/personal-details");
     };

     const inputStyles = "h-[50px] bg-[#F1F1F2] p-1.5 text-[16px] border-r-2";

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full flex flex-col gap-2.5">
            <input className={`${inputStyles}`} type="text" id="addressLine1" {...register("addressLine1")} placeholder="Address Line 1" />
            {errors.addressLine1 && (
                <p className="text-red-700">{errors.addressLine1.message}</p>
            )}
            <input className={`${inputStyles}`} type="text" id="addressLine2" {...register("addressLine2")} placeholder="Address Line 2" />
            {errors.addressLine2 && (
                <p className="text-red-700">{errors.addressLine2.message}</p>
            )}
            <input className={`${inputStyles}`} type="text" id="town" {...register("town")} placeholder="Town/City" />
            {errors.town && (
                <p className="text-red-700">{errors.town.message}</p>
            )}
            <input className={`${inputStyles}`} type="text" id="county" {...register("county")} placeholder="County" />
            {errors.county && (
                <p className="text-red-700" >{errors.county?.message}</p>
            )}
            <p>Please check the details above are correct before continuing.</p>
            <button type="submit" className={`flex flex-row gap-2.5 justify-center items-center h-[50px] ${!isValid || isSubmitting ? "bg-[#B8B8BE]" : "bg-[#FF004F]"} text-white text-[15px] leading-6`} disabled={!isValid || isSubmitting}><span>Next</span> <Image src={"/images/address/arrow-right.png"} width={7} height={12.44} alt="Next" /></button>
        </form>
    )
}