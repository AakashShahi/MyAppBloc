import React, { useEffect, useState } from 'react'

export default function StateManagement() {
    // usestate 
    //1. data , 2. update funcion
    const [data, setData] = useState("My data")
    const [num, setNum] = useState(0)

    const updatingData = () => {
        setData("New Data")
    }

    const handleName = (e) => {
        setData(e.target.value)
    }

    //dependecy updater
    useEffect(
        () => {
            if (data == "Hello World") {
                setNum(100000)
            }
        },
        [data]
    )

    // use effect in initial
    useEffect(
        () => {
            setNum(-90)
            setData("Initial Value")
        },
        []// leave empty to run when compinent loads
    )
    return (
        <div>
            {data}
            <button onClick={updatingData}>Click me</button>
            <button onClick={
                () => {
                    setData("From Callback")
                }
            }>Click Callback</button>

            <div>
                {num}

                <button onClick={
                    () => {
                        setNum(num + 1);
                    }
                }>+</button>

                <button onClick={
                    () => {
                        setNum(num - 1);
                    }
                }>-</button>

                <button onClick={
                    () => {
                        setNum(0);
                    }
                }>reset</button>

            </div>

            <input onChange={
                (e) => {
                    setData(e.target.value)
                }
            }></input>

            <input onChange={handleName}></input>
        </div>
    )
}
