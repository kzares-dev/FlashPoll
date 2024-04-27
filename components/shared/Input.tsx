import { TOOD } from "@/lib/types"

type InputType = {
    label: string,
    onChange: (e: string) => void,
    placeholder: string,
    value: string,
}

const Input = ({ label, onChange, placeholder, value }: InputType) => {
    return (
        <div className="flex flex-col ">
            <label
                htmlFor={label}
                className=" text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >{label}:</label>
            <input
                type="text"
                placeholder={placeholder}
                name={label}
                value={value}
                onChange={(e: TOOD) => onChange(e.target.value)}
                className="border-black/80  px-[10px] py-[11px] text-[17px] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
            />
        </div>
    )
}

export default Input
