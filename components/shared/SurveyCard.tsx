import { survey, surveyOption } from "@/lib/types"
import Image from "next/image"

const SurveyCard = ({ survey }: { survey: survey }) => {

    const renderIcon = () => {
        switch (survey.type) {
            case "Multiple Choice":
                return "/multipleChoice.svg";
                break;
            default:
                return "/";
        }
    }

    function sumCounts() {
        let sum = 0;
        survey.surveyOptions.forEach((item: surveyOption) => {
            sum += item.count;
        });
        return sum;
    }


    return (
        <div className="p-5  border rounded-md flex flex-row items-center gap-4">

            <Image src={renderIcon()} alt="" width={50} height={50} />

            <div className="flex flex-col ">
                <h1 className="text-3xl font-sans font-thin text-neutral-700">
                    {survey.type}
                    <span className="text-neutral-400"> ({new Date().toLocaleDateString()})</span>
                </h1>

                <div className="text-neutral-600 text-lg max-w-[400px]">
                    {survey.header}
                </div>

            </div>
            <div className="flex-1 flex justify-end text-xl font-sans font-semibold text-neutral-600"> {sumCounts()} </div>


        </div>
    )
}

export default SurveyCard
