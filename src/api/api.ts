import axios from "axios"

const server = axios.create({
  baseURL: "https://04d0-94-143-197-243.ngrok-free.app/",
})

export const getDuels = async (offset: number) => {
  let response = await server.get(`duels/open`)
  return response.data
}
