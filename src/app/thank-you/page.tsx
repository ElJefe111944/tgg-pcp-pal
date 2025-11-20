"use client";

import Image from "next/image";
import { useAppSelector } from "../store/hooks";
import { NextSteps } from "../components/thank-you/NextSteps";
import { Register } from "../components/thank-you/Register";
import { Ratings } from "../components/thank-you/Ratings";
import { SpeedUp } from "../components/thank-you/SpeedUp";
import { AgreementsCollapsible } from "../components/thank-you/AgreementsCollapsible";
import { agreements } from "../../data/agreements"

export default function Page() {

    const { firstName } = useAppSelector(
        (state) => state.personalDetails
    );

    return (
        <main className="my-5 flex flex-col">
            <div className="border-b border-b-[#00000026] pb-5 mx-4 flex flex-col gap-1.25">
                <div className="flex flex-row gap-1.5 items-start">
                    <div className="flex flex-row gap-1.5">
                        <div className="flex flex-col gap-1.5 flex-2/3">
                            <h1 className="text-2xl font-semibold text-[#161823]">
                                Congratulations {firstName} your claim is now submitted.
                            </h1>
                        </div>
                        <div className="flex items-start">
                            <Image
                                src={"/images/thank-you/congratulations.png"} alt={`Congratulations ${firstName} your claim is now submitted.`}
                                width={54}
                                height={52.22}
                                className="w-[54px] h-[52.22px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p>Your potential claim value is</p>
                    <h2 className="text-[32px] leading-9.5 tracking-normal font-bold text-[#14D567]">£15,954.75*</h2>
                </div>
                <AgreementsCollapsible agreements={agreements} />
                <Register />
            </div>
            <NextSteps />
            <div className="py-10 mx-4 flex flex-col gap-5 border-b border-b-[#00000026]">
                <h4 className="text-2xl leading-6 tracking-normal font-semibold text-[#161823]">How quick and easy was our website?</h4>
                <p className="text-[16px] leading-6 tracking-normal font-normal text-[#161823CC]">Your friends and family may have financed a vehicle before 2021.</p>
                <div className="border border-solid border-[#D9D9D9CC] w-full h-[187px] py-[25px] flex flex-col items-center gap-5">
                    <p className="text-xl leading-5 tracking-normal font-normal">Select a star to leave a review</p>
                    <Ratings />
                    <Ratings />
                </div>
            </div>
            <SpeedUp />
        </main>
    );
}
