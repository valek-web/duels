"use client"
import React from "react"
import { Stake } from "../Stake/Stake"
import { SelectBtn } from "../SelectBtn/SelectBtn"
import "./DuelsBtn.css"
import Duels from "@/store/duels"
import { observer } from "mobx-react-lite"

export const DuelsBtn = observer(() => {
  const { filters, currentFilter, setCurrentFilter, setDefoult } = Duels
  console.log("render DuelsBtn")
  return (
    <>
      <button className="duels__button duels__button--blue">
        <span className="icon-plus"></span> Создать комнату
      </button>
      <Stake />
      <SelectBtn items={filters} setCurrentItem={setCurrentFilter} currentItem={currentFilter} />
      <button className="duels__button duels__button--dark" onClick={setDefoult}>
        По умолчанию
      </button>
    </>
  )
})
