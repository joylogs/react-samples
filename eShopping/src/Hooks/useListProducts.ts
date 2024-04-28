import { useState } from "react"
import { END_POINT } from "../Services/constant"
import { axiosInstance } from '../Services/api'

const request = async () => {
    const {data} = await axiosInstance.request({
        method: 'GET',
        url: END_POINT.products
    })
    return data?.products || []
}

const useListProducts = () => {
    const [error, setError] = useState<string | null>(null)

    const { isError, data, isFetching, refetch } = useQuery({
        queryKey: ['get-useListProducts'],
        queryFn: () => request(),
        onSuccess: (result) => {},
        onError: (err) => {
            const { message } = handleError(err)
            setError(message || "Something went wrong")
        },
        enabled: true,
    })
    return { isError, isFetching, data, error, refetch, setError }
}

export { useListProducts }