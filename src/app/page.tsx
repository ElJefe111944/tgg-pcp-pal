"use client";

import Image from "next/image";
import { Checks } from "./components/landing/Checks";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [showFaqs, setShowFaqs] = useState<boolean>(false);

  const handleShowFaqs = () => {
    setShowFaqs(!showFaqs);
  };

  return (
    <main className="min-h-screen my-2.5 flex flex-col">
      <div className="flex flex-col gap-2.5 border-b border-b-[#00000026] mx-4">
        <div className="flex gap-2.5 flex-col">
          <h1 className="text-[32px] leading-[38px] font-bold text-[#161823] tracking-normal">You could be owed up to £5,318.25* per car finance agreement.</h1>
          <p className="font-normal text-[16px] leading-6 tracking-normal text-[#161823]">Check in under 60 seconds to see if you’re owed compensation. Use the free agreement finder to start your claim.</p>
        </div>
        <div>
          <Link href={"#"} className="pulse-button bg-[#FF004F] w-full flex h-[50px] items-center justify-center gap-3.5 text-white rounded-[7px] shadow-[0_0_0_4px_#FF004F4D]">
            <Image src={"/images/magnifying-glass.png"} alt="Find My Agreements" width={17} height={17} className="w-[17px] h-[17px]" />
            Find My Agreements
          </Link>
        </div>
        <div>
          <div className="flex my-3.25 flex-row items-center justify-center gap-6.5">
            <Image
              src={"/images/trustpilot.png"}
              alt="Rated 4.8 out of 5 on Trustpilot"
              width={93.56}
              height={31.54}
              className="w-[93.56px] h-[31.54px]"
            />
            <Image
              src={"/images/secure-ssl.png"}
              alt="Secure SSL Encryption"
              width={75}
              height={20.08}
              className="w-[75px] h-[20.08px]"
            />
          </div>
          <div className="my-3.25">
            <h2 className="text-2xl font-medium text-center">Average claim value: <span className="font-extrabold">£5,318.25*</span> per vehicle</h2>
          </div>
        </div>
      </div>
      <div className="px-6 py-2.5 mx-4">
        <Checks />
      </div>
      <div className="bg-black my-5 px-4 py-5">
        <div className="flex flex-col text-white gap-3.25 justify-center h-[122px]">
          <p className="text-[16px] font-normal leading-4 tracking-normal">We will locate all of your vehicle finance agreements with all these 73 lenders.</p>
          <div className="flex flex-col gap-3.25">
            <button className="h-11 bg-[#D9D9D9] border-black border-[1.5px] text-black rounded-[10px] text-[16px]">View Lenders</button>
          </div>
        </div>
        {!showFaqs ? (
          <div className="flex h-11">
            <button onClick={handleShowFaqs} className="h-11 w-full bg-[#545252] border-black border-[1.5px] text-white rounded-[10px] text-[16px]">See More About PCP</button>
          </div>
        ) : (
          <div className="bg-white">FAQs</div>
        )}
      </div>
    </main>
  );
}
