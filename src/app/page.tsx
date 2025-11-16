import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen my-2.5 mx-4 flex flex-col">
      <div className="flex flex-col gap-2.5 border-b border-b-[#00000026]">
        <div className="flex gap-2.5 flex-col">
          <h1 className="text-[32px] leading-[38px] font-bold text-[#161823] tracking-normal">You could be owed up to £5,318.25* per car finance agreement.</h1>
          <p className="font-normal text-[16px] leading-6 tracking-normal text-[#161823]">Check in under 60 seconds to see if you’re owed compensation. Use the free agreement finder to start your claim.</p>
        </div>
        <div>
          <button className="pulse-button bg-[#FF004F] w-full flex h-[50px] items-center justify-center gap-3.5 text-white rounded-[7px] shadow-[0_0_0_4px_#FF004F4D]">
            <Image src={"/images/magnifying-glass.png"} alt="Find My Agreements" width={17} height={17} className="w-[17px] h-[17px]" />
            Find My Agreements
          </button>
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
      <div className="px-6 py-2.5">
        <ul className="flex flex-col gap-4.5">
          <li className="flex flex-row gap-3.75 items-center">
            <Image src={"/images/tick.png"} width={16} height={15} alt="Check in under 60 seconds" className="w-4 h-[15px]" />
            <p className="text-sm font-normal tracking-normal">Check in under <span className="font-bold">60 seconds</span></p></li>
          <li className="flex flex-row gap-3.75 items-center">
            <Image src={"/images/tick.png"} width={16} height={15} alt="Free agreement finder" className="w-4 h-[15px]" />
            <p className="text-sm font-normal tracking-normal"><span className="font-bold">Free</span> agreement finder</p>
          </li>
          <li className="flex flex-row gap-3.75 items-center">
            <Image src={"/images/tick.png"} width={16} height={15} alt="1 Million plus drivers signed up" className="w-4 h-[15px]" />
            <p className="text-sm font-normal tracking-normal"><span className="font-bold">1 Million+</span> drivers signed up</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
