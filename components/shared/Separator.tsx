
const Separator = ({ orientation = "horizontal" }: { orientation?: string }) => {

    const renderHorizontal = () => <div className="w-full h-[.1px] bg-neutral-300" />
    const renderVertical = () => <div className="h-auto w-[.1px] bg-neutral-300" />



    if (orientation === "horizontal") return renderHorizontal()
    else  return renderVertical();
}

export default Separator
