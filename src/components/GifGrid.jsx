import { useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    const [images, setImagenes] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImagenes(newImages)
    }


    useEffect( () => {
        getGifs(category);
    },[])

    return (

        <>
            <h3>{category}</h3>

            <ol>
                {
                    images.map(({id, title}) => (
                        <li key={id} >{title}</li>
                    ))
                }
            </ol>
        </>

    )
}
 