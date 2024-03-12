"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

import "./Present.css"

type propsType = {
  urlImg: string
  classAnimation: "present__img-a1" | "present__img-a2" | "present__img-a3"
}

export const Present: React.FC<propsType> = (props) => {
  const [isAnimated, setIsAnimated] = useState(false)
  //   const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsAnimated(false)
      clearTimeout(timeoutID)
    }, 420)
  })

  return (
    <div className="present">
      <Image
        src={props.urlImg}
        className={`present__img ${props.classAnimation}`}
        alt="#"
        width={300}
        height={300}
        onClick={() => setIsAnimated(true)}
      />
      <button className={`present__btn ${isAnimated && "present__btn-a"}`}>ОТКРЫТЬ</button>
    </div>
  )
}
