import { useState, useEffect } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [images, setImagenes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
            const newImagens = await getGifs(category)
            setImagenes(newImagens)
            setIsLoading(false)
    }

    useEffect( () => {
        getImages()
    },[])

  return {
    images,
    isLoading
    }
}
