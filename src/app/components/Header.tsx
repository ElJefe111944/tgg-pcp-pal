import Image from "next/image";

export function Header() {

    return (
        <header>
            <div className="flex flex-row justify-between bg-black h-[50px] items-center">
                <div className="pl-4">
                    <Image
                        src={"/images/header/logo.png"}
                        alt="PCP Pal Logo"
                        width={116}
                        height={30}
                        className="h-[30px] w-[116px]"
                    />
                </div>
                <div className="flex flex-row items-center pr-4 gap-4">
                    <Image
                        src={"/images/header/trustpilot.png"}
                        alt="Rated 4.8 out of 5 on Trustpilot"
                        width={68.36}
                        height={23.05}
                        className="w-[68.36px] h-[23.05px]"
                    />
                    <Image
                        src={"/images/header/secure-ssl.png"}
                        alt="Secure SSL Encryption"
                        width={75}
                        height={20.08}
                        className="w-[75px] h-[20.08px]"
                    />
                </div>
            </div>
            <div className="h-8.5 bg-white flex items-center mx-4 gap-2.5 border-b border-b-[#00000026]">
                <Image
                    src={"/images/header/user-icon.png"}
                    alt="1,000,000+ drivers helped so far"
                    width={12}
                    height={11.58}
                    className="w-3 h-[11.58px]"
                />
                <p className="font-normal text-[11px] leading-3.75 text-[#161823CC]">1,000,000+ drivers helped so far</p>
            </div>
        </header>
    )
};