import Image from "next/image"
import Link from "next/link"

const surveyList = [
  {
    title: "Multiple Choice",
    description: "Select one of the multiple options",
    icon: "/multipleChoice.svg",
    href: "/new/multiplechoice"
  },
]
const New = () => {
  return (
    <section className="flex flex-col gap-4 w-full px-5">

      <h1 className="text-[60px] lg:text-[100px] font-bold text-center my-5 font-sans"> Survey Type : </h1>

      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

        {surveyList.map((item, idx) => (
          <Link href={item.href} key={idx} className=" flex my-2 gap-5 flex-col flex-center bg-white shadow border p-5 rounded-md lg:max-w-[400px] w-full py-20 hover:shadow-xl transition-all">
            <Image src={item.icon} width={90} height={90} alt='' />


            <h1 className='text-[50px]' > {item.title} </h1>
            <p className='text-[20px] font-italic font-semibold text-neutral-500' > {item.description} </p>

          </Link>


        ))}
      </div>

    </section>
  )
}

export default New
