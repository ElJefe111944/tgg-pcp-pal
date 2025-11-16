import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MyAgreements } from "./MyAgreements";

interface FaqsTypes {
    showFaqs: boolean,
    handleShowFaqs: () => void;
}

const faqs = [
    {
        id: 1,
        q: "How do I determine if I qualify for compensation?",
        a: "If you've had a finance agreement like PCP or HP before 2021, you may be eligible for compensation due to mis-selling. Check your eligibility by filling out our online form."
    },
    {
        id: 2,
        q: "What criteria must I meet to make a claim?",
        a: "Your lender must have failed to disclose the commission details on your agreement(s). If your finance details were inadequately explained or you faced higher interest rates due to commissions, you could be eligible for £1,000s. Check our free online form to see if you meet the criteria."
    },
    {
        id: 3,
        q: "Does the type of agreement matter (PCP vs. HP)?",
        a: "Don't worry if you had an HP loan instead of a PCP agreement – we accept claims for various vehicle finance agreements. Start your claim today with our online form."
    },
];

export function FAQs({ showFaqs, handleShowFaqs }: FaqsTypes) {

    return (
        <>
            {!showFaqs ? (
                <div className="flex h-11">
                    <button onClick={handleShowFaqs} className="h-11 w-full bg-[#545252] border-black border-[1.5px] text-white rounded-[10px] text-[16px]">See More About PCP</button>
                </div>
            ) : (
                <div className="bg-white p-5 flex flex-col gap-5">
                    <div>
                        <h2 className="text-[24px] font-semibold text-[#161823]">Frequently Asked Questions</h2>
                    </div>
                    <div className="border-b border-[#D9D9D9] b-r-[1px]">
                            <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]}>
                                {faqs.map((item) => (
                                    <AccordionItem key={item.id} value={`item-${item.id}`}>
                                        <AccordionTrigger><p className="text-[16px] font-normal leading-6 text-[#161823]">{item.q}</p></AccordionTrigger>
                                        <AccordionContent>
                                            <p className="pl-7 text-[12px] font-normal leading-5.5 tracking-normaltext-[#161823]">{item.a}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                    </div>
                    <div className="my-2.5">
                       <MyAgreements />
                    </div>
                </div>
            )}
        </>
    )

};