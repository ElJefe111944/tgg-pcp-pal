"use client";

import { useState } from "react";
import Image from "next/image";
import { useAppSelector } from "../store/hooks";

type StarRowProps = {
    onChange?(value: number): void;
};

export default function Page() {

    const { firstName } = useAppSelector(
        (state) => state.personalDetails
    );

    const [selected, setSelected] = useState(1);
    const [hovered, setHovered] = useState<number | null>(null);

    const activeValue = hovered ?? selected;

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
                {/* DROPDOWN */}
                {/* REGISTER */}
                <div className="flex flex-col gap-3.75 my-5">
                    <h3 className="text-[24px] font-semibold tracking-normal leading-6">Feel like we’ve missed something?</h3>
                    <p>Use the registration checker below to find other agreements you know you’ve had.</p>
                    <Image src={"/images/thank-you/enter-reg.png"} alt="Enter your registration" height={119.98} width={343} className="h-[119.98px]" />
                    <button disabled={true} className={`w-full h-[50px] flex justify-center items-center gap-2 rounded-[7px] bg-[#B8B8BE] text-white text-[18px] leading-[18.12px]`}>
                        <span>Search</span>
                        <Image
                            src={"/images/address/arrow-right.png"}
                            width={7}
                            height={12.44}
                            alt="Search"
                            className="w-1.75 h-[12.44px]"
                        /></button>
                </div>
            </div>
            {/* NEXT STEPS */}
            <div className="py-10 mx-4 flex flex-col gap-5 border-b border-b-[#00000026]">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="text-2xl leading-6 tracking-normal font-semibold text-[#161823]">Next steps</h4>
                    <Image src={"/images/thank-you/courmacs-logo.png"} height={35.21} width={84} alt="Courmacs Legal Ltd" className="h-[35.21px] w-[84px]" />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[16px] leading-6 tracking-normal font-normal text-[#161823CC]">Keep an eye out for an email in your inbox as we will shortly be sending you a copy of your legal documents. Don’t forget to check your junk or spam folder. It has important information we need you to review as soon as possible!</p>
                    <p className="text-[12px] leading-[22px] tracking-normal font-normal text-[#161823CC]">Watch this short video, on what the next steps of your journey with Courmacs Legal are.</p>
                    <Image src={"/images/thank-you/next-video.png"} width={343} height={186.93} className="h-[186.93px]" alt="Next Steps" />
                </div>
                <div className="flex flex-col gap-1.25">
                    <h4 className="text-2xl leading-6 tracking-normal font-semibold text-[#161823]">Help Your Close Ones Claim!</h4>
                    <p className="text-[16px] leading-6 tracking-normal font-normal text-[#161823CC]">Your friends and family may have financed a vehicle before 2021.</p>
                    <Image src={"/images/thank-you/share-on-wa.png"} height={55} width={343} className="h-[55px]" alt="Share on Whatsapp" />
                </div>
            </div>
            {/* RATING */}
            <div className="py-10 mx-4 flex flex-col gap-5 border-b border-b-[#00000026]">
                <h4 className="text-2xl leading-6 tracking-normal font-semibold text-[#161823]">How quick and easy was our website?</h4>
                <p className="text-[16px] leading-6 tracking-normal font-normal text-[#161823CC]">Your friends and family may have financed a vehicle before 2021.</p>
                <div className="border border-solid border-[#D9D9D9CC] w-full h-[187px] p-[25px] flex flex-col items-center gap-5">
                    <p className="text-xl leading-5 tracking-normal font-normal">Select a star to leave a review</p>
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => {
                            const starIndex = index + 1;
                            const isFull = starIndex <= activeValue;

                            return (
                                <button
                                    key={starIndex}
                                    type="button"
                                    onMouseEnter={() => setHovered(starIndex)}
                                    onMouseLeave={() => setHovered(null)}
                                    onClick={() => setSelected(starIndex)}
                                    className="p-0 m-0 border-none bg-transparent cursor-pointer"
                                    aria-label={`Rate ${starIndex} out of 5`}
                                >
                                    <Image
                                        src={
                                            isFull
                                                ? "/images/thank-you/star-full.png"
                                                : "/images/thank-you/star-empty.png"
                                        }
                                        alt={isFull ? "Filled rating star" : "Empty rating star"}
                                        width={46}
                                        height={46}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* SPEED THING UP */}
            <div className="py-10 mx-4 flex flex-col gap-5 border-b border-b-[#00000026]">
                <div>
                    <div>
                        <h3>Speed Things Up!</h3>
                        <p>Speed up your claim by uploading your driving licence (or passport).</p>
                    </div>
                    <Image src={"/images/thank-you/speed-thing-up.png"} width={75.65} height={61} className="w-[75.65px] h-[61px]" alt="Speed things up" />
                </div>
                <div>
                    <Image src={"/images/thank-you/upload.png"} width={343} height={67} className="h-[67px]" alt="Click to upload" />
                    <button disabled={true} className={`w-full h-[50px] flex justify-center items-center gap-2 rounded-[7px] bg-[#B8B8BE] text-white text-[18px] leading-[18.12px]`}>
                        <span>Submit</span>
                        <Image
                            src={"/images/address/arrow-right.png"}
                            width={7}
                            height={12.44}
                            alt="Submit"
                            className="w-1.75 h-[12.44px]"
                        /></button>
                </div>

            </div>
            {/* LEGAL OBLIGATIONS */}
        </main>
    );
}
