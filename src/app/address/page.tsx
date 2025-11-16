import Image from "next/image"
import { Trust } from "../components/landing/Trust"

export default async function Page() {

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
          <div>
            <label className="text-[16px] leading-6 text-[#161823]" htmlFor="postcode">Enter your postcode and tap ‘Search’.</label>
          </div>
          <div>
            <div className="flex flex-row gap-3.5 items-center">
              <input id="postcode" type="text" className="h-[50px] bg-[#F1F1F2] w-[197px] p-1.5 text-[16px]" placeholder="Postcode" />
              <button className="w-[132px] h-[35px] rounded-[29px] bg-[#B8B8BE] text-white text-[15px] leading-6">Search</button>
            </div>
          </div>
        </div>
        <div>
          <Trust />
        </div>
      </div>
    </main>
  )
}