"use client"
import { survey } from "@/lib/types"
import MultipleChoice from "./MultipleChoice"

// TODO: Make some kind of authentication, in this part is important
// the data is passed to the corresponding survey data type
const Survey = ({ survey }: { survey: survey }) => {


    switch (survey.type) {
        case "Multiple Choice":
            return <MultipleChoice survey={survey} />
        default:
            return "no match"
    }

}

export default Survey
