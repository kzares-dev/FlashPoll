import { survey } from "../types"

export async function fetchSurvey(id: string): Promise<survey> {

    return new Promise((resolve, reject) => {

        const data: survey = {
            type: "Multiple Choice",
            header: "Which country would you like to visit on your next vacation?",
            surveyOptions: [
                {
                    title: "Italy - famous for its art, history, and cuisine",
                    count: 1,
                },
                {
                    title: "Japan - known for its unique culture and stunning landscapes",
                    count: 2,
                },
                {
                    title: "Australia - home to the Great Barrier Reef and diverse wildlife",
                    count: 3,
                }
            ]

        }

        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}