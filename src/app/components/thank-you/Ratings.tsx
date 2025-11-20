import Image from "next/image";
import { useState } from "react";

type StarRowProps = {
    onChange?(value: number): void;
};

export function Ratings() {

    const [selected, setSelected] = useState(1);
    const [hovered, setHovered] = useState<number | null>(null);

    const activeValue = hovered ?? selected;

    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
                const starIndex = index + 1;
                const isFull = starIndex <= activeValue;

                return (
                    <button
                        key={starIndex}
                        type="button"
                        onMouseEnter={() => setHovered(starIndex)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setSelected(starIndex)}
                        className="p-0 m-0 border-none bg-transparent cursor-pointer"
                        aria-label={`Rate ${starIndex} out of 5`}
                    >
                        <Image
                            src={
                                isFull
                                    ? "/images/thank-you/star-full.png"
                                    : "/images/thank-you/star-empty.png"
                            }
                            alt={isFull ? "Filled rating star" : "Empty rating star"}
                            width={46}
                            height={46}
                        />
                    </button>
                );
            })}
        </div>
    )
}