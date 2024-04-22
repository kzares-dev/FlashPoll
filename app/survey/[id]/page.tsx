//TODO:
// survey must be a server component
// fetch all the metadata of the survey in the database
//? use redis?
// must check if the user has alredy voted
// votes can be changed

import Survey from "@/components/Surveys";
import { fetchSurvey } from "@/lib/actions/survey.action"
// this component fetch the survey data and passes to a client component to be rendered
const SurveyContainer = async ({ params }: { params: { id: string } }) => {

    const survey = await fetchSurvey(params.id);

    return <Survey survey={survey} />
}

export default SurveyContainer
