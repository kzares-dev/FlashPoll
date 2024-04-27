export type TOOD = any;

export type surveyOption = {
    title: string,
    count: number,
}

export type survey = {
    type: string,
    header: string,
    surveyOptions: surveyOption[],
}

