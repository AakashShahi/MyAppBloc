import React, { useEffect, useState } from 'react'

export default function LoginTest() {
    const [msg, setMsg] = useState("My data")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    useEffect(
        () => {
            setMsg("Please provide information")
        },
        []
    )

    useEffect(
        () => {
            if (msg == "Saroj") {
                setMsg("Welcome Saroj")
            }
        },
        [msg]
    )

    const checkInput = () => {
        if (msg == "" || email == "" || pass == "") {
            setMsg("Please Provide all info")
        }
        else {
            setMsg("Congratulations")
        }
    }


    return (
        <div>
            <input onChange={
                (e) => {
                    setMsg(e.target.value)
                }}></input>
            <input onChange={
                (e) => {
                    setEmail(e.target.value)
                }}></input>
            <input onChange={
                (e) => {
                    setPass(e.target.value)
                }}></input>
            <button onClick={checkInput}>Submit</button>
            <div>
                {msg}
            </div>
        </div>
    )
}
