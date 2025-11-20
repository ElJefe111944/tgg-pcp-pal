
import Image from "next/image"

export function NextSteps() {

    return (
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
    )
}