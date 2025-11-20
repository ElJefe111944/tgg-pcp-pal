"use client";

import Image from "next/image";
import { Trust } from "../components/landing/Trust";
import { useAppSelector } from "../store/hooks";



export default function Page() {

    const { firstName } = useAppSelector(
        (state) => state.personalDetails
    );

    return (
        <main className="my-5 flex flex-col">
            <div className="border-b border-b-[#00000026] mx-4 flex flex-col gap-1.25">
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


                <div>
                    <Trust />
                </div>
            </div>
        </main>
    );
}
