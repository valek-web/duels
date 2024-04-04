import { filterType, itemSelect } from "./../types/globalType"
import { makeAutoObservable } from "mobx"

class Duels {
  duels: string = ""
  maxStake: number = 1000000
  minStake: number = 80
  filters: Array<itemSelect> = [
    { id: "descending", title: "По убыванию" },
    { id: "ascending", title: "По возрастанию" },
    { id: "losingLot", title: "Низкий винрейт" },
    { id: "winerLot", title: "Высокий винрейт" },
  ]
  currentFilter: itemSelect = { id: "descending", title: "По убыванию" }
  myDuel: string = ""

  constructor() {
    makeAutoObservable(this)
  }

  setMaxStake = (maxStake: number) => {
    this.maxStake = maxStake
  }
  setMinStake = (minStake: number) => {
    this.minStake = minStake
  }
  setCurrentFilter = (currentFilter: itemSelect) => {
    this.currentFilter = currentFilter
  }
  setDefoult = () => {
    this.currentFilter = { id: "descending", title: "По убыванию суммы" }
    this.minStake = 80
    this.maxStake = 1000000
  }
}

export default new Duels()
