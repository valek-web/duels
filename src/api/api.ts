import axios from "axios"

const server = axios.create({
  baseURL: "http://188.225.73.127/",
})

export const getDuelsOpen = async (offset: number) => {
  let response = await server.get(`open/`)
  return response.data
}

export const getDuelsProfile = async () => {
  let response = await server.get(`all/`)
  return response.data
}

export const createDuel = async (offset: number) => {}

export const getJWT = async (offset: number) => {
  let response = await server.get(`users/jwt/`)
  return response.data
}

export const sendReport = async (id: number, report_type: any, description: any) => {
  let response = await server.post(`users/jwt/`, {
    id: id,
    description: description,
    rreport_type: report_type,
  })
  return response.data
}

export const getInfoProfile = async (id: number) => {
  let response = await server.post(`users/user/`)
  return response.data
}
