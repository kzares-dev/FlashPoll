"use client";
import { survey } from "@/lib/types";
import { RefObject, useRef, useState } from "react";
import MultipleChoice from "./MultipleChoice";
import Input from "../shared/Input";

const CreateMultipleChoice = () => {

  const [survey, setSurvey] = useState<survey & { default: boolean }>({
    type: "",
    header: "Here goes the question",
    surveyOptions: [{ title: "Example Option", count: 0 }],
    default: true,
  })

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

      setSurvey((prevState: survey & { default: boolean }) => {
        return { ...prevState, default: false, surveyOptions: tempArray }
      })
      setEditIdx(-1);
      setOption("")
      return;
    }

    // first we check if no option was created before
    // this steph is necesary becouse the surveyOptions by default has one element
    if (survey.default) {

      setSurvey((prevState: survey & { default: boolean }) => {
        return { ...prevState, default: false, surveyOptions: [newOption] }
      })

    } else {
      setSurvey((prevState: survey & { default: boolean }) => {
        return { ...prevState, surveyOptions: [...prevState.surveyOptions, newOption] }
      })
    }

    // clear
    setOption("");
  }

  const deleteOption = (idx: number) => {
    let tempArray = survey.surveyOptions;
    tempArray.splice(idx, 1);

    setSurvey((prevState: survey & { default: boolean }) => {
      return { ...prevState, default: false, surveyOptions: tempArray }
    })
  }

  const editOption = (idx: number) => {
    inputOptionRef.current?.focus();
    setOption(survey.surveyOptions[idx].title)
    setEditIdx(idx);
  }

  return (
    <section className="section-flex min-h-[80vh] relative">

      <div className=" items-start flex-between flex-row gap-10 w-full">
        <div className="flex-1 ">
          <MultipleChoice
            deleteOption={deleteOption}
            editOption={editOption}
            disabled
            survey={survey} />
        </div>

        <div className="bg-white flex-1 min-h-[20vh] container-paddings shadow border rounded-lg flex flex-col gap-3">
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
      <div className="absolute bottom-0 right-0 min-w-[300px] py-[30px] pl-5 border-[2px] border-neutral-400 text-4xl font-sans rounded-tr-[20px] shadow-lg">
        Publish
      </div>
    </section>
  )
}

export default CreateMultipleChoice
