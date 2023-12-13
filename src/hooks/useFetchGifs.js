import { useState, useEffect } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {

  // Tenemos 2 estados locales uno que lleva el array de los GIFS que se consultaron y otro donde tenemos el valor booleano que cambia una vez que termina de cargar los gifs despues de la consulta 

    const [images, setImagenes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // usamos una funcion asyncronica 
    const getImages = async() => {
            const newImagens = await getGifs(category)
            setImagenes(newImagens)
            setIsLoading(false)
    }
    
    // el  useEffect  hace que se ejecute el getImages de forma automatica apenas se haya renderizado la pagina principal  y al final ponemos las [] para que esto suceda una sola vez 
    useEffect( () => {
        getImages()
    },[])

  return {
    images,
    isLoading
    }
}
