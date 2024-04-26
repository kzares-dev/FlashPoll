"use client"
import { Progress } from "../ui/progress";
import { useState, useEffect } from "react";
import CountUp from 'react-countup';

const Counter = ({ number, total }: { number: number, total: number }) => {
    const [percent, setPercent] = useState<number>(0);
    

    useEffect(() => {
        const localPercent = (number / total * 100);
        console.log({ number, localPercent })
        if (percent >= localPercent) return
        
        
        if(localPercent > 50){
            setTimeout(() => {
                setPercent(percent + 1)
            }, 10);
        }else {
            setTimeout(() => {
                setPercent(percent + 1)
            }, 50);
        }
            


    }, [percent])

    return <span className="font-mono text-[15px] w-full flex-row flex-center gap-4 h-[10px] absolute bottom-0 px-2">
        <Progress value={percent} />
        <CountUp start={0} end={number} duration={3} />
    </span>
}

export default Counter
