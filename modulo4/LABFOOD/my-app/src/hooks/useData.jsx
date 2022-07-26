import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

const useData = (param) => {
  
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false) 

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setIsLoading(true)
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios.get(`${BASE_URL + param}`, headers)
    .then((res) => {
      setData(res.data.restaurants)
    }).catch((err) => {
      alert(err.response.data.message)
    }).finally(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    })
  }

  return { data, isLoading }

}

export default useData;