import { dummySurveys } from "../dummy";
import { survey } from "../types"

export async function fetchSurvey(id: string): Promise<survey> {

    return new Promise((resolve, reject) => {

        const data = dummySurveys(1)[0]

        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}

export async function getUserSurveys(qty: number) : Promise<survey[]> {

    return new Promise((resolve, reject) => {

        const data = dummySurveys(qty)

        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}

export async function publishSurvey(survey: survey) {

    return survey
}

