"use client";

import Image from "next/image";
import { useForm, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Trust } from "../components/landing/Trust";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPersonalDetails } from "../store/features/personalDetailsSlice";
import {
  personalDetailsSchema,
  type PersonalDetailsFormValues,
} from "../validation/personalDetails";

const inputStyles =
  "h-[50px] bg-[#F1F1F2] p-1.5 text-[16px]";

const personalDetailsResolver: Resolver<PersonalDetailsFormValues> =
  yupResolver(personalDetailsSchema) as Resolver<PersonalDetailsFormValues>;

export default function Page() {
  const dispatch = useAppDispatch();
  const personalDetailsState = useAppSelector(
    (state) => state.personalDetails
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PersonalDetailsFormValues>({
    resolver: personalDetailsResolver,
    mode: "onChange",
    defaultValues: {
      title: personalDetailsState.title,
      firstName: personalDetailsState.firstName,
      surname: personalDetailsState.surname,
      dobDay: personalDetailsState.dobDay,
      dobMonth: personalDetailsState.dobMonth,
      dobYear: personalDetailsState.dobYear,
    },
  });

  const onSubmit = (data: PersonalDetailsFormValues) => {
    dispatch(
      setPersonalDetails({
        title: data.title,
        firstName: data.firstName,
        surname: data.surname,
        dobDay: data.dobDay,
        dobMonth: data.dobMonth,
        dobYear: data.dobYear,
      })
    );

    // router.push("/next-step") if/when you want
  };

  return (
    <main className="my-5 flex flex-col">
      <div className="border-b border-b-[#00000026] mx-4 flex flex-col gap-5">
        <div className="flex flex-row gap-9 items-start">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-semibold text-[#161823]">
              Your Personal Details
            </h2>
            <p className="text-[16px] font-normal leading-6 text-[#161823CC]">
              Your current personal details are essential to search for all
              finance agreements attached to your name.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full flex flex-col gap-2.5"
        >
          {/* Title */}
          <div className="flex flex-col gap-1">
            <select
              id="title"
              {...register("title")}
              className={`${inputStyles} w-[88px]`}
            >
              <option value="">Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Other">Other</option>
            </select>
            {errors.title && (
              <p className="text-red-700">{errors.title.message}</p>
            )}
          </div>

          {/* First name */}
          <div className="flex flex-col gap-1">
            <input
              className={inputStyles}
              type="text"
              id="firstName"
              {...register("firstName")}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-700">{errors.firstName.message}</p>
            )}
          </div>

          {/* Surname */}
          <div className="flex flex-col gap-1">
            <input
              className={inputStyles}
              type="text"
              id="surname"
              {...register("surname")}
              placeholder="Surname"
            />
            {errors.surname && (
              <p className="text-red-700">{errors.surname.message}</p>
            )}
          </div>

          {/* DOB */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px]">Date of birth</label>
            <div className="flex gap-2">
              <input
                className={`${inputStyles} w-[72px] text-center`}
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="DD"
                {...register("dobDay")}
              />
              <input
                className={`${inputStyles} w-[72px] text-center`}
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="MM"
                {...register("dobMonth")}
              />
              <input
                className={`${inputStyles} w-[100px] text-center`}
                type="text"
                inputMode="numeric"
                maxLength={4}
                placeholder="YYYY"
                {...register("dobYear")}
              />
            </div>
            {(errors.dobDay || errors.dobMonth || errors.dobYear) && (
              <p className="text-red-700">
                {errors.dobDay?.message ||
                  errors.dobMonth?.message ||
                  errors.dobYear?.message}
              </p>
            )}
          </div>

          <p>Please check the details above are correct before continuing.</p>

          <button
            type="submit"
            className={`flex flex-row gap-2.5 justify-center items-center h-[50px] ${
              !isValid || isSubmitting ? "bg-[#B8B8BE]" : "bg-[#FF004F]"
            } text-white text-[15px] leading-6`}
            disabled={!isValid || isSubmitting}
          >
            <span>Next</span>
            <Image
              src={"/images/address/arrow-right.png"}
              width={7}
              height={12.44}
              alt="Next"
            />
          </button>
        </form>

        <div>
          <Trust />
        </div>
      </div>
    </main>
  );
}
