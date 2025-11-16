import Image from "next/image";

const benefits = [
    {
        id: 1,
        text: (
            <>
                Check in under <span className="font-bold">60 seconds</span>
            </>
        ),
        alt: "Check in under 60 seconds"
    },
    {
        id: 2,
        text: (
            <>
                <span className="font-bold">Free</span> agreement finder
            </>
        ),
        alt: "Free agreement finder"
    },
    {
        id: 3,
        text: (
            <>
                <span className="font-bold">1 Million+</span> drivers signed up
            </>
        ),
        alt: "1 Million plus drivers signed up"
    },
];

export function Checks() {
    return (
        <ul className="flex flex-col gap-[18px]">
            {benefits.map((item) => (
                <li
                    key={item.id}
                    className="flex flex-row items-center gap-[15px]"
                >
                    <Image
                        src="/images/tick.png"
                        width={16}
                        height={15}
                        alt={item.alt}
                        aria-hidden="true"
                        className="h-[15px] w-4"
                    />
                    <p className="text-sm font-normal tracking-normal">{item.text}</p>
                </li>
            ))}
        </ul>
    );
}
