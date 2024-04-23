"use client";
import { surveyOption } from "@/lib/types"
import Image from "next/image";
import { useState } from "react";
import Counter from "../shared/Counter";
import Button from "../shared/Button";

const MultipleChoiceOptions = ({ surveyOptions }: { surveyOptions: surveyOption[] }) => {

    const [selectedOption, setSelectedOption] = useState<number>(-1);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);


    const submitSurvey = () => {
        setIsSubmitted(true);
    }

    return (
        <div className="justify-between flex flex-col gap-10">

            <div className="flex flex-col  gap-4 py-5 overflow-auto cursor-pointer">
                {surveyOptions.map((surveyOption: surveyOption, idx: number) => {

                    let isSelected = selectedOption === idx

                    return (
                        <div
                            onClick={() => setSelectedOption(idx)}
                            className={`relative flex flex-col  gap-4 transition-all ${isSelected? "bg-gray-200 border" : "hover:translate-y-[-5px] bg-gray-50 hover:bg-gray-100 hover:border"} "`}
                            key={surveyOption}
                            key={surveyOption.count + surveyOption.title}
                        >

                            <div className={` flex flex-row items-center gap-3  w-full py-3 px-2 mr-1 rounded-md  transition-all  ${isSubmitted && 'py-5'}`}>

                                <span className="w-5 h-5 flex-center">
                                    {selectedOption === idx ?
                                        <Image src={'/checked.gif'} alt="" width={20} height={20} /> :
                                        <div className="w-4 h-4 rounded-full border border-black flex-center" />
                                    }
                                </span>

                                <h1 className={`text-xl text-neutral-600`}>{surveyOption.title}</h1>
                            </div>

                            {isSubmitted && <Counter number={surveyOption.count} />}

                        </div>
                    )
                })}
            </div>

            <Button onClick={submitSurvey} disabled={selectedOption < 0} >Submit</Button>

        </div>
    )
}

export default MultipleChoiceOptions
