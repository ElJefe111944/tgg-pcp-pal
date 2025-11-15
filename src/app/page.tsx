import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen my-2.5 mx-4 flex flex-col">
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2.5 flex-col">
          <h1 className="text-[32px] leading-[38px] font-bold text-[#161823] tracking-normal">You could be owed up to £5,318.25* per car finance agreement.</h1>
          <p className="font-normal text-[16px] leading-6 tracking-normal text-[#161823]">Check in under 60 seconds to see if you’re owed compensation. Use the free agreement finder to start your claim.</p>
        </div>
        <div>
          {/* CTA */}
          <button className="pulse-button bg-[#FF004F] w-full flex h-[50px] items-center justify-center gap-3.5 text-white rounded-[7px] shadow-[0_0_0_4px_#FF004F4D]">
            <Image src={"/images/magnifying-glass.png"} alt="Find My Agreements" width={17} height={17} className="w-[17px] h-[17px]" />
            Find My Agreements
          </button>
        </div>
        <div>

        </div>
      </div>
    </main>
  );
}
