"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PersonalDetailsView } from "./PersonalDetailsView";
import { ContactDetailsView } from "./ContactDetailsView";

function StepRouter() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") ?? "personal";

  if (step === "contact") {
    return <ContactDetailsView />;
  }

  return <PersonalDetailsView />;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StepRouter />
    </Suspense>
  );
}
