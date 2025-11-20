import Image from "next/image"
import { Legal } from "./Legal"


export function SpeedUp() {

    return (
        <div className="py-10 mx-4 flex flex-col gap-[15px] border-b border-b-[#00000026]">
            <div className="flex flex-row">
                <div className="flex flex-col gap-2.5 flex-2/3">
                    <h4 className="text-2xl leading-6 tracking-normal font-semibold text-[#161823]">Speed Things Up!</h4>
                    <p className="text-[16px] leading-6 tracking-normal font-normal text-[#161823CC]">Speed up your claim by uploading your driving licence (or passport).</p>
                </div>
                <Image src={"/images/thank-you/speed-thing-up.png"} width={75.65} height={61} className="w-[75.65px] h-[61px]" alt="Speed things up" />
            </div>
            <div className="flex flex-col gap-6.5">
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
            <div className="mx-1.5 py-5">
                <ul className="flex flex-col gap-[18px]">
                    <li
                        className="flex flex-row items-center gap-[15px]"
                    >
                        <Image
                            src="/images/tick.png"
                            width={16}
                            height={15}
                            alt={"tick"}
                            aria-hidden="true"
                            className="h-[15px] w-4"
                        />
                        <p className="text-[16px] font-normal leading-6 tracking-normal">95% chance their car finance included lender commission.</p>
                    </li>
                    <li
                        className="flex flex-row items-center gap-[15px]"
                    >
                        <Image
                            src="/images/tick.png"
                            width={16}
                            height={15}
                            alt={"tick"}
                            aria-hidden="true"
                            className="h-[15px] w-4"
                        />
                        <p className="text-[16px] leading-6 font-normal tracking-normal">The average claim value is £5,318.25 per vehicle.</p>
                    </li>

                </ul>
            </div>
            <Legal />
        </div>
    )
}