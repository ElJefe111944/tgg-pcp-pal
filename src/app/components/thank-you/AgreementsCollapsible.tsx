"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

type Agreement = {
  id: string;
  plate: string;
  lender: string;
  year: string;
  carImageSrc: string; 
};

type AgreementsCollapsibleProps = {
  agreements: Agreement[];
};

export function AgreementsCollapsible({ agreements }: AgreementsCollapsibleProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full max-w-[480px] space-y-2 mt-5"
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="w-full flex items-center justify-between rounded border border-[#161823CC] bg-white px-4 py-3 text-left"
        >
          <span className="text-[18px] font-normal text-[#161823]">
            <span className="text-[18px] font-semibold text-[#161823]">
              {agreements.length}
            </span>{" "}
            Agreements Found
          </span>
          {open ? (
            <ChevronUp className="h-5 w-5 text-[#161823]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#161823]" />
          )}
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2 collapsible-fade">
        {agreements.map((agreement) => (
          <div
            key={agreement.id}
            className="rounded overflow-hidden"
          >
            <Image
              src={agreement.carImageSrc}
              alt={`${agreement.lender} finance agreement`}
              width={480}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
