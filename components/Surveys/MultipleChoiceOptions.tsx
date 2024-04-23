"use client";
import { surveyOption } from "@/lib/types"
import Image from "next/image";
import IncrementNumber from "react-increment-number";

const MultipleChoiceOptions = ({ surveyOptions }: { surveyOptions: surveyOption[] }) => {
    return (
        <div className="flex flex-col  gap-3 py-5">

            {surveyOptions.map((surveyOption: surveyOption) => (
                <div className="flex-between" key={surveyOption.count + surveyOption.title}>
                    <div className="flex flex-row items-center gap-3">
                        <div className="w-4 h-4 rounded-full border border-black flex-center" />

                        <h1 className="text-xl text-neutral-700">{surveyOption.title}</h1>
                    </div>

                    <IncrementNumber to={surveyOption.count} speed={5} />
                </div>
            ))}

        </div>
    )
}

export default MultipleChoiceOptions
