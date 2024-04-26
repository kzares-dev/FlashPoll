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
    <section className="flex flex-col gap-4">

      <h1> Survey Type </h1>

      <div className="">

        {surveyList.map((item, idx) => (
          <Link href={item.href} key={idx} className="flex my-2 gap-2 flex-col flex-center bg-white shadow border p-5 rounded-md">
            <Image src={item.icon} width={90} height={90} alt='' />


            <h1 className='text-[20px] font-italic font-semibold text-neutral-500' > {item.description} </h1>
            <h1 className='text-[70px] font-bold ' > {item.title} </h1>

          </Link>


        ))}
      </div>

    </section>
  )
}

export default New
