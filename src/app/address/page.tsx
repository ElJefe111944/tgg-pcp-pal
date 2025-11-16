"use client";

import { useState } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image"
import { Trust } from "../components/landing/Trust"
import { AddressForm } from "../components/address/AddressForm"

const postcodeSchema = yup.object({
  postcode: yup
    .string()
    .trim()
    .matches(
      /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i,
      "Please enter a valid UK postcode")
    .required("Postcode is required")
});

type PostCodeFormValues = yup.InferType<typeof postcodeSchema>;

export default function Page() {

  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<PostCodeFormValues>({
    resolver: yupResolver(postcodeSchema),
    mode: "onChange"
  })

  const onSubmit = (data: PostCodeFormValues) => {
    setShowAddressForm(true);
  };

  return (
    <main className="my-5 flex flex-col">
      <div className="border-b border-b-[#00000026] mx-4 flex flex-col gap-5">
        <div className="flex flex-row gap-9 items-start">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-semibold text-[#161823]">Your Current Address</h2>
            <p className="text-[16px] font-normal leading-6 text-[#161823CC]">We need your current address to find your finance agreements</p>
          </div>
          <div className="">
            <Image src={"/images/address/address.png"} alt="Your current address" className="h-[52.65px] w-[50px] max-w-none" width={50} height={52.65} />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2.5">
              <div>
                <label className="text-[16px] leading-6 text-[#161823]" htmlFor="postcode">Enter your postcode and tap ‘Search’.</label>
              </div>
              <div className="flex flex-row gap-3.5 items-center">
                <input {...register("postcode")} autoCapitalize="postal-code" id="postcode" type="text" className="h-[50px] bg-[#F1F1F2] w-[197px] p-1.5 text-[16px]" placeholder="Postcode" />
                <button disabled={!isValid || isSubmitting} className={`w-[132px] h-[35px] rounded-[29px] ${!isValid || isSubmitting ? "bg-[#B8B8BE]" : "bg-[#FF004F]"} text-white text-[15px] leading-6`}>Search</button>
              </div>
            </div>
          </form>
          {showAddressForm && (
            <div>
              <AddressForm />
            </div>
          )}
        </div>
        <div>
          <Trust />
        </div>
      </div>
    </main>
  )
}