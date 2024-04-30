import Image from "next/image"
import Separator from "@/components/shared/Separator"
import { getUserSurveys } from "@/lib/actions/survey.action"
import SurveyCard from "@/components/shared/SurveyCard";
import Button from "@/components/shared/Button";
import Link from "next/link";

async function Dashboard() {

    const userSurveys = await getUserSurveys(5);

    return (
        <section className="w-full h-auto container py-10 px-1 flex gap-5 flex-col" >

            <div className="flex my-2 gap-2 flex-col flex-center">
                <Image src="/survey.png" width={90} height={90} alt='' />


                <h1 className='text-[30px] font-italic font-semibold text-neutral-500' >Welcome Back</h1>
                <h1 className='text-[70px] font-bold ' >To the Flash Poll</h1>

            </div>

            <div className=' bg-white w-full min-h-[60vh] custom-border shadow-md h-auto flex flex-col lg:flex-row pb-5' >


                <div className="flex-1 h-auto"> Fuck</div>

                <Separator orientation="vertical" />

                {/*-- Here goes the user surveys --*/}
                <div className="flex-1 h-auto px-2 ">
                    <h1 className="header my-5 text-center">Your Surveys</h1>

                    <div className="flex flex-col gap-5 px-2 py-5">
                        {userSurveys.map((survey, idx) => {
                            return (
                                <SurveyCard survey={survey} key={idx} />
                            )
                        })}
                    </div>

                    <Button >
                        <Link href="/surveys" >See More</Link>
                    </Button>
                </div>


            </div>




        </section>
    )
}

export default Dashboard
