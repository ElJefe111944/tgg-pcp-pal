"use client";

import { useState } from "react";
import { Checks } from "./components/landing/Checks";
import { FAQs } from "./components/landing/FAQs";
import { MyAgreements } from "./components/landing/MyAgreements";
import { Headline } from "./components/landing/Headline";
import { Trust } from "./components/landing/Trust";



export default function Home() {

  const [showFaqs, setShowFaqs] = useState<boolean>(false);

  const handleShowFaqs = () => setShowFaqs((prev) => !prev);

  return (
    <main className="my-2.5 flex flex-col">
      <div className="flex flex-col gap-2.5 border-b border-b-[#00000026] mx-4">
          <Headline />
        <div>
          <MyAgreements />
        </div>
          <Trust /> 
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
          <FAQs showFaqs={showFaqs} handleShowFaqs={handleShowFaqs} />
      </div>
    </main>
  );
}
