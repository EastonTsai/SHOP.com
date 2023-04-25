import axios from "axios"

const baseURL = "http://localhost:3004"
export const getBanner = async () => {
  try {
    const res = await axios.get(`${baseURL}/data`)
    return res.data
  }
  catch (err) {
    if (err) {
      console.error(err.response.data)
    }
  }
}