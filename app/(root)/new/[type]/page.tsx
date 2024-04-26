import CreateMultipleChoice from "@/components/Surveys/CreateMultipleChoice"

const SurveyTYpe = ({ params }: { params: { type: string } }) => {


    switch (params.type) {
        case "multiplechoice": 
            return <CreateMultipleChoice />
        default : return ""

    }
}

    export default SurveyTYpe
