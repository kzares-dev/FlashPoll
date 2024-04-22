import { survey } from "../types"

export async function fetchSurvey(id: string): Promise<survey> {

    return new Promise((resolve, reject) => {

        const data: survey = {
            type: "Multiple Choice",
            header: "What do you think about x",
            surveyOptions: [
                {
                    title: "option 1",
                    count: 1,
                },
                {
                    title: "option 2",
                    count: 2,
                },
                {
                    title: "option 3",
                    count: 3,
                }

            ]
        }

        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}