import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({category}) => {

    const [images, setImagenes] = useState([])

    const getImages = async() => {
            const newImagens = await getGifs(category)
            setImagenes(newImagens)
    }

    useEffect( () => {
        getImages()
    },[])

    return (

        <>
            <h3>{category}</h3>

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            { ...image}
                         />
                    ))
                }
            </div>
        </>

    )
}
 