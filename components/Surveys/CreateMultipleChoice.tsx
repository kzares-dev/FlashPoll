"use client";
import { survey } from "@/lib/types";
import { RefObject, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MultipleChoice from "./MultipleChoice";
import Input from "../shared/Input";
import { publishSurvey } from "@/lib/actions/survey.action";

const CreateMultipleChoice = () => {

  const router = useRouter();

  const [survey, setSurvey] = useState<survey>({
    type: "",
    header: "Here goes the question",
    surveyOptions: [{ title: "Example Option", count: 0 }],
  })
  const [isDefault, setDefault] = useState<boolean>(true)

  // this state is to create a survey option
  const [option, setOption] = useState<string>("");
  // this variables are fot the editing process
  const [editIdx, setEditIdx] = useState<number>(-1)
  const inputOptionRef = useRef() as RefObject<HTMLInputElement>;

  const createOption = (e: any) => {
    e.preventDefault()
    if (option === '') return

    const newOption = {
      title: option,
      count: 0,
    }
    // check if the edit mode is enabled
    if (editIdx >= 0) {
      let tempArray = survey.surveyOptions;
      tempArray[editIdx] = newOption;

      setSurvey((prevState: survey) => {
        return { ...prevState, default: false, surveyOptions: tempArray }
      })
      setEditIdx(-1);
      setOption("")
      return;
    }

    // first we check if no option was created before
    // this steph is necesary becouse the surveyOptions by default has one element
    if (isDefault) {
      setDefault(false)
      setSurvey((prevState: survey) => {
        return { ...prevState, surveyOptions: [newOption] }
      })

    } else {
      setSurvey((prevState: survey) => {
        return { ...prevState, surveyOptions: [...prevState.surveyOptions, newOption] }
      })
    }

    // clear
    setOption("");
  }

  const deleteOption = (idx: number) => {
    let tempArray = survey.surveyOptions;
    tempArray.splice(idx, 1);

    setSurvey((prevState: survey) => {
      return { ...prevState, default: false, surveyOptions: tempArray }
    })
  }

  const editOption = (idx: number) => {
    inputOptionRef.current?.focus();
    setOption(survey.surveyOptions[idx].title)
    setEditIdx(idx);
  }

  // this function send the data to the server action, where is processed and saved in database
  const submitSurvey = async () => {

    // TODO: validations

     await publishSurvey(survey)
      .then(() => {
        router.push("/dashboard")
        // process the response
      })
      .catch((e) => {
        // p rocess the error
        console.log(e)
      })
  }

  return (
    <section className="section-flex min-h-[80vh] relative flex-col gap-5 md:gap-10">

      <div className=" items-start flex-between flex-col-reverse  md:flex-row gap-10 w-full">

        <div className="flex-1 w-full">
          <MultipleChoice
            deleteOption={deleteOption}
            editOption={editOption}
            disabled
            survey={survey} />
        </div>

        <div className="bg-white flex-1 min-h-[20vh] container-paddings shadow border rounded-lg flex flex-col gap-3 w-full">
          <h1 className="text-2xl font-semibold font-sans py-5 border-b">Customize your survey</h1>

          <Input
            label="Question"
            value={survey.header}
            placeholder="Type here..."
            onChange={(e: string) => { setSurvey({ ...survey, header: e }) }}
          />

          <form onSubmit={e => createOption(e)} className="flex flex-col gap-5" >
            <Input
              ref={inputOptionRef}
              label="Option"
              value={option}
              placeholder="Create a survey option"
              onChange={(e: string) => setOption(e)} />

            <div className="flex justify-end w-full">
              <button type="submit" className="px-20 py-3 bg-neutral-800 text-white w-fit rounded-md">Add</button>
            </div>
          </form>

        </div>
      </div>

      {/* --- Continue Button --- */}
      <div onClick={submitSurvey} className="my-4 w-full py-[20px] pl-5 border-[2px] border-neutral-400 text-4xl text-center font-serif shadow-lg cursor-pointer hover:bg-gray-100 transition-all hover:shadow-sm">
        Publish
      </div>
    </section>
  )
}

export default CreateMultipleChoice
