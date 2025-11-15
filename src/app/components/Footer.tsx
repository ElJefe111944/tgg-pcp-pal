import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-[53px] bg-black flex items-center px-5">
      <nav
        aria-label="Legal and privacy information"
        className="w-full"
      >
        <ul className="flex flex-row flex-wrap items-center gap-4">
          <li>
            <Link
              className="text-white text-[10px] underline font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              href="#"
            >
              Terms &amp; Conditions
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-[10px] underline font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              href="#"
            >
              Complaints Procedure
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-[10px] underline font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              href="#"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
