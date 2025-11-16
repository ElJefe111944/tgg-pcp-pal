import Link from "next/link"
import Image from "next/image"


export function MyAgreements() {

    return (
        <Link href={"/address"} className="pulse-button bg-[#FF004F] w-full flex h-[50px] items-center justify-center gap-3.5 text-white rounded-[7px] shadow-[0_0_0_4px_#FF004F4D]">
            <Image src={"/images/magnifying-glass.png"} alt="Find My Agreements" width={17} height={17} className="w-[17px] h-[17px]" />
            Find My Agreements
        </Link>
    )
};