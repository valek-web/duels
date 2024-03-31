import axios from "axios"

const server = axios.create({
  baseURL: "https://api.example.com",
})

const getDuels = async (offset: number) => {
  let response = await server.get(`/api/duels?offset=${offset}`)
  return response.data
}
