"use client"
import IncrementNumber from "react-increment-number";
import { Progress } from "../ui/progress";
import { useState, useEffect } from "react";

const Counter = ({ number }: { number: number }) => {
    const [count, setCount] = useState<number>(0)

    const increaseNumber = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        if(count === number) return;

        setTimeout(() => {
            increaseNumber();
        }, 100 / (number - 100000))
    }, [count])

    return <span className="font-mono text-[15px] w-full flex-row flex-center gap-4 h-[10px] absolute bottom-0 px-2">
        <Progress value={10} />
        {count}
    </span>
}

export default Counter
