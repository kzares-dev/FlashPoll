"use client"
import { Progress } from "../ui/progress";
import { useState, useEffect } from "react";

const Counter = ({ number, total }: { number: number, total: number }) => {
    const [count, setCount] = useState<number>(0);
    const [percent, setPercent] = useState<number>(0);
    console.log(total);

    const increaseNumber = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        if (count === number) return;

        setTimeout(() => {
            increaseNumber();
        }, 10)
    }, [count])

    useEffect(() => {
        const localPercent: number = parseInt(number / total * 100);
        console.log({ number, localPercent })
        if (percent >= localPercent) return
        else
            setTimeout(() => {
                setPercent(percent + 1)
            }, 10);


    }, [percent])

    return <span className="font-mono text-[15px] w-full flex-row flex-center gap-4 h-[10px] absolute bottom-0 px-2">
        <Progress value={percent} />
        {count}
    </span>
}

export default Counter
