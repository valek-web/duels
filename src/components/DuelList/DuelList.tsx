"use client"
import React from "react"
import { Duel } from "../Duel/Duel"

export const DuelList = () => {
  return (
    <div className="duels__list">
      <Duel
        nickname="Sodus"
        stake="1000"
        playrs={1}
        map="/img/map1.jpeg"
        imgProfile="/img/profile/profile__def.jpg"
        onClickBtn={() => console.log("click")}
      />
      <Duel
        nickname="Sodus"
        stake="1000"
        playrs={1}
        map="/img/map1.jpeg"
        imgProfile="/img/profile/profile__def.jpg"
        onClickBtn={() => console.log("click")}
      />
      <Duel
        nickname="Sodus"
        stake="1000"
        playrs={1}
        map="/img/map1.jpeg"
        imgProfile="/img/profile/profile__def.jpg"
        onClickBtn={() => console.log("click")}
      />
      <Duel
        nickname="Sodus"
        stake="1000"
        playrs={1}
        map="/img/map1.jpeg"
        imgProfile="/img/profile/profile__def.jpg"
        onClickBtn={() => console.log("click")}
      />
    </div>
  )
}
