"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Trust } from "../components/landing/Trust";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setContactDetails } from "../store/features/contactDetailsSlice";
import {
    contactDetailsSchema,
    type ContactDetailsFormValues,
} from "../validation/contactDetails";

const contactDetailsResolver: Resolver<ContactDetailsFormValues> =
    yupResolver(contactDetailsSchema) as Resolver<ContactDetailsFormValues>;

const inputStyles = "h-[50px] bg-[#F1F1F2] p-1.5 px-[11px] text-[16px] w-full rounded-[2px]";

export function ContactDetailsView() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const contactDetailsState = useAppSelector(
        (state) => state.contactDetails
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<ContactDetailsFormValues>({
        resolver: contactDetailsResolver,
        mode: "onChange",
        defaultValues: {
            email: contactDetailsState.email,
            mobile: contactDetailsState.mobile,
        },
    });

    const onSubmit = (data: ContactDetailsFormValues) => {
        dispatch(
            setContactDetails({
                email: data.email,
                mobile: data.mobile,
            })
        );

        router.push("/signature");
    };

    return (
        <main className="my-5 flex flex-col">
            <div className="border-b border-b-[#00000026] mx-4 flex flex-col gap-5">
                <div className="flex flex-row gap-9 items-start">
                    <div className="flex flex-row gap-1.5">
                        <div className="flex flex-col gap-1.5 flex-2/3">
                            <h2 className="text-2xl font-semibold text-[#161823]">
                                Your Contact Details
                            </h2>
                            <p className="text-[16px] font-normal leading-6 text-[#161823CC]">
                                We’ll use these details to contact you about your finance
                                agreements.
                            </p>
                        </div>
                        <div className="flex items-end">
                            <Image
                                src={"/images/address/email-phone-icon.png"} alt="Enter Mobile Number and Email Address"
                                width={77.93}
                                height={41.32}
                                className="w-[77.93px] h-[41.32px]"
                            />
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="w-full flex flex-col gap-2.5"
                >

                    {/* Mobile */}
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold text-[#161823]">
                            Your Mobile Number
                        </h2>
                        <p className="text-sm leading-6 tracking-normal text-[#161823CC]">For example: 07123456789</p>
                        <div className="relative">
                            <input
                                className={inputStyles}
                                type="tel"
                                id="mobile"
                                {...register("mobile")}
                                placeholder="Mobile number"
                            />
                            <Image
                                src={"/images/address/secure-ssl-input.png"}
                                alt="Secure SSL Encryption"
                                height={14.15}
                                width={51}
                                className="w-[51px] h-[14.15px] absolute top-1/2 right-0 bottom-1/2 -translate-1/2"
                            />
                        </div>
                        {errors.mobile && (
                            <p className="text-red-700">{errors.mobile.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold text-[#161823]">
                            Your Email Address
                        </h2>
                        <p className="text-sm leading-6 tracking-normal text-[#161823CC]">For example: John@example.co.uk</p>
                        <div className="relative">
                            <input
                                className={inputStyles}
                                type="email"
                                id="email"
                                {...register("email")}
                                placeholder="Email address"
                            />
                            <Image
                                src={"/images/address/secure-ssl-input.png"}
                                alt="Secure SSL Encryption"
                                height={14.15}
                                width={51}
                                className="w-[51px] h-[14.15px] absolute top-1/2 right-0 bottom-1/2 -translate-1/2"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-700">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="flex gap-3 mt-2">

                        <button
                            type="submit"
                            className={`flex-1 flex flex-row gap-2.5 justify-center items-center h-[50px] ${!isValid || isSubmitting ? "bg-[#B8B8BE]" : "bg-[#FF004F]"
                                } text-white text-[15px] leading-6`}
                            disabled={!isValid || isSubmitting}
                        >
                            <Image src={"/images/magnifying-glass.png"} alt="Find My Agreements" width={17} height={17} className="w-[17px] h-[17px]" />
                            Find My Agreements
                        </button>
                    </div>
                </form>

                <div>
                    <Trust />
                </div>
            </div>
        </main>
    );
}
