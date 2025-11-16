import Image from "next/image"

export function Trust(){

    return (
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
        <div className="my-3.25 w-[343px]">
          <h2 className="text-2xl font-medium text-center">Average claim value: <span className="font-extrabold">£5,318.25*</span> per vehicle</h2>
        </div>
      </div> 
    )
};