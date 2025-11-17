"use client";

import { useSearchParams } from "next/navigation";
import { PersonalDetailsView } from "./PersonalDetailsView";
import { ContactDetailsView } from "./ContactDetailsView";


export default function Page() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") ?? "personal";

  if (step === "contact") {
    return <ContactDetailsView />;
  }

  return <PersonalDetailsView />;
}

