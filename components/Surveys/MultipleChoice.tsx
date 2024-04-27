import { survey } from "@/lib/types"
import MultipleChoiceOptions from "./MultipleChoiceOptions"
import Image from "next/image"

// the disables param is to make this component rehusable in the survey creation
const MultipleChoice = ({ survey, disabled }: { survey: survey, disabled?: boolean }) => {

    return (
        <div className="custom-border container-paddings bg-white max-w-2xl w-full  lg:min-h-3xl shadow-md pt-10  mx-auto">

            <div className="flex-row flex gap-2 border-b pb-5">
                <Image src={"/survey.svg"} alt="" width={60} height={60} />
                <h1 className="header font-sans text-neutral-800 font-medium" >  {survey.header} </h1>

            </div>

            <MultipleChoiceOptions disabled surveyOptions={survey.surveyOptions} />

           

        </div>
    )

}

export default MultipleChoice


