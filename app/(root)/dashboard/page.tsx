import Image from "next/image"


function Dashboard() {
    return (
        <section className="w-full h-auto container py-10 px-1 flex gap-5 flex-col" >

            <div className="flex my-2 gap-2 flex-col flex-center">
                <Image src="/survey.png" width={90} height={90} alt='' />


                <h1 className='text-[30px] font-italic font-semibold text-neutral-500' >Welcome Back</h1>
                <h1 className='text-[70px] font-bold ' >To the Flash Poll</h1>

            </div>

            <div className=' bg-white flex-center w-full min-h-[60vh] custom-border shadow-md h-auto ' >

            </div>




        </section>
    )
}

export default Dashboard
