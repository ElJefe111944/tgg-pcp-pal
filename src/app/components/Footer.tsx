import Link from "next/link";
import Image from "next/image";

const textClass =
  "text-[11px] font-light leading-5 text-[#161823]";

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Complaints Procedure", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-5">
      <section className="px-5">
        <div className="flex flex-col gap-5 justify-center">
          <Image
            src="/images/footer/sra-logo.png"
            alt="Regulated by Solicitors Regulation Authority"
            width={96}
            height={50}
            className="h-[50.42px] w-24"
          />

          <p className={textClass}>
            PCP Pal is a trading style of Courmacs Legal Limited. Registered in
            England and Wales, Company No. 13185687. Authorised and regulated by
            the Solicitors Regulation Authority (SRA) – SRA Reg No: 819044.
            Registered with the Information Commissioner&apos;s Office (ICO) – ICO
            Reg No: ZA886741.
          </p>

          <p className={textClass}>
            The outcome of your claim will depend on the specific circumstances
            of your case. Results may vary, and past performance does not
            indicate future outcomes.
          </p>

          <ul className={`${textClass} list-none space-y-1`}>
            <li>*£5,318.25 is the average claim as of 29/05/2024.</li>
            <li>*£10,446.46 is the most significant claim value as of 29/05/2024.</li>
            <li>*Based on industry research; industry results may vary.</li>
          </ul>

          <p className={textClass}>
            <span className="font-semibold">Privacy and Complaints</span>
            <br />
            By submitting a claim, you consent to Courmacs Legal Limited
            processing your data in accordance with our <span className="underline text-[11px]">Privacy Policy</span>. For
            concerns, please review our{" "}
            <span className="underline text-[11px]">Complaints Procedure</span>.
          </p>

          <p className={textClass}>
            The agreements identified are subject to verification. This means
            that while agreements may be initially detected, they must go
            through a verification process to confirm eligibility.
          </p>
        </div>
      </section>

      <div className="h-[53px] bg-black px-5 flex items-center">
        <nav
          aria-label="Legal and privacy information"
          className="w-full"
        >
          <ul className="flex flex-row flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white text-[10px] underline font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
