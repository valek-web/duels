import { resultType } from "../types/globalType"

export interface duel {
  map: string
  mapImg: string
  bet: number
  result: resultType
  date: string
  time: string
  timezone: string
  id: number
}
