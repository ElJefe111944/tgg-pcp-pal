"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import SignatureCanvas from "react-signature-canvas";
import { useForm } from "react-hook-form";

import { Trust } from "../components/landing/Trust";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setContactDetails } from "../store/features/contactDetailsSlice";

type FormValues = {};

export default function Page() {
    const dispatch = useAppDispatch();
    const contactDetailsState = useAppSelector((state) => state.contactDetails);
    const personalDetailsState = useAppSelector((state) => state.personalDetails)


    const {
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<FormValues>({
        mode: "onChange",
    });

    const sigCanvas = useRef<SignatureCanvas | null>(null);
    const [hasSignature, setHasSignature] = useState(false);

    const handleSignatureEnd = () => {
        if (!sigCanvas.current) return;

        setHasSignature(!sigCanvas.current.isEmpty());
    };

    const handleResetSignature = () => {
        if (!sigCanvas.current) return;
        sigCanvas.current.clear();
        setHasSignature(false);
    };

    const onSubmit = () => {
        if (!sigCanvas.current || sigCanvas.current.isEmpty()) {
            setHasSignature(false);
            return;
        }

        // If you want the actual signature image:
        const signatureDataUrl = sigCanvas.current
            .getTrimmedCanvas()
            .toDataURL("image/png");

        // TODO: send `signatureDataUrl` to your API / store it in Redux, etc.

        // Keep your existing Redux shape intact for now:
        dispatch(
            setContactDetails({
                email: contactDetailsState.email,
                mobile: contactDetailsState.mobile,
            })
        );

        // router.push("/next-step");
    };

    return (
        <main className="my-5 flex flex-col">
            <div className="border-b border-b-[#00000026] mx-4 flex flex-col gap-5">
                <div className="flex flex-row gap-9 items-start">
                    <div className="flex flex-row gap-1.5">
                        <div className="flex flex-col gap-1.5">
                            <h2 className="text-[#161823] leading-[38px] text-[32px] tracking-normal font-semibold">
                                <span className="text-[#14D567]">Great News,</span> {personalDetailsState.firstName != "" && `${personalDetailsState.firstName}, `} we’ve found 3 claims
                            </h2>
                            <p className="text-[16px] font-normal leading-6 text-[#161823CC]">
                                Submit your claim to reveal your lenders and potential compensation amount.
                            </p>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="w-full flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <p className="text-[12px] leading-[22px] tracking-normal font-normal text-[#161823CC]">
                            Use your finger or stylus to <span className="font-bold">sign on the dotted line</span> below.
                        </p>

                        <SignatureCanvas
                            ref={sigCanvas}
                            penColor="#161823"
                            onEnd={handleSignatureEnd}
                            canvasProps={{
                                className:
                                    "w-full h-[180px] bg-white rounded-[2px] border-b border-b-2 border-dashed border-b-[#161823CC]",
                            }}
                        />
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] italic leading-[22px] text-[#161823CC] font-normal tracking-normal">
                                Signature
                            </p>
                            <button
                                type="button"
                                onClick={handleResetSignature}
                                className="flex flex-row gap-1 justify-center items-center h-[26.19px] w-[117px] bg-[#161823CC] text-[#F2F2F2] text-[12px] leading-[22px] rounded-[2px]"
                            >
                                <Image src={"/images/signature/eraser.png"} alt="Reset Signature" width={8} height={8} className="h-2 w-2" />
                                Reset Signature
                            </button>
                        </div>
                        {!hasSignature && (
                            <p className="text-xs text-[#FF004F]">
                                Please provide your signature to continue.
                            </p>
                        )}
                        <div className="flex flex-col gap-2.5">
                            <p className="underline text-[12px] leading-[22px] tracking-normal font-normal text-[#161823CC]">View our no-win no-fee client agreement (DBA)</p>
                            <p className="text-[8px] leading-[13px] tracking-normal font-medium text-[#161823CC]">By proceeding, you confirm that you have read, understand, and accept Courmacs Legal Limited’s Terms and Conditions. I also agree to instruct Courmacs Legal Limited to send a data subject access request (DSAR) to find out if my PCP or HP agreements were mis-sold By clicking ‘Submit My Claim’, I understand that for each claim, I will receive a new damages-based agreement for me to review and that my signature above will be applied to each document.</p>
                        </div>
                        <div>
                            <p className="text-[12px] leading-[22px] text-center font-normal">
                                Up to <span className="font-bold text-[#000000]">9 out of 10 car finance agreements</span> are affected*
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-2">
                        <button
                            type="submit"
                            className={`flex flex-row gap-2.5 justify-center items-center h-[50px] ${!hasSignature || isSubmitting ? "bg-[#B8B8BE]" : "bg-[#FF004F]"
                                } text-white text-[18px] leading-[18.12px] rounded-[2px] font-medium`}
                            disabled={!hasSignature || isSubmitting}
                        >
                            <Image
                                src={"/images/signature/tick-white.png"}
                                alt="Submit Claim & Reveal"
                                width={18}
                                height={18}
                                className="w-[18px] h-[18px]"
                            />
                            Submit Claim & Reveal
                        </button>
                    </div>
                </form>

                <div>
                    <Trust />
                </div>
            </div>
        </main>
    );
}
