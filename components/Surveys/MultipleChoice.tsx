import { survey } from "@/lib/types"
import MultipleChoiceOptions from "./MultipleChoiceOptions"
import Image from "next/image"


const MultipleChoice = ({ survey }: { survey: survey }) => {

    return (
        <div className="custom-border container-paddings bg-white max-w-2xl w-full max-h-3xl h-[50vh] shadow-md pt-10">

            <div className="flex-row flex gap-2 border-b pb-5">
                <Image src={"/survey.svg"} alt="" width={60} height={60} />
                <h1 className="header font-sans text-neutral-800 font-medium" >  {survey.header} </h1>

            </div>

            <MultipleChoiceOptions surveyOptions={survey.surveyOptions} />

        </div>
    )

}

export default MultipleChoice
