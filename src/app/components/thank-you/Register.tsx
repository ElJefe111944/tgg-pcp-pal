import Image from "next/image"

export function Register() {

    return (
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
    )
}