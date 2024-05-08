import handleError from '../Helpers/handleError'
import { useState } from "react"
import { END_POINT } from "../Services/constant"
import { axiosInstance } from '../Services/api'
import { useQuery } from 'react-query'

const request = async () => {
    const { data } = await axiosInstance.request({
        method: 'GET',
        url: END_POINT.products
    })
    // console.log("==>", data)
    return data?.products || []
}

const useListProducts = () => {
    const [error, setError] = useState<string | null>(null)

    const { isError, data, isFetching, refetch } = useQuery({
        queryKey: [''],
        queryFn: () => request(),
        onSuccess: (result) => { },
        onError: (err) => {
            const { message } = handleError(err)
            // console.log(message)
            setError(message || "Something went wrong")
        },
        enabled: true,
    })
    return { isError, isFetching, data, error, refetch, setError }
}

export { useListProducts }