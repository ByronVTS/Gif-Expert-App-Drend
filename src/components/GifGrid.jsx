import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    getGifs(category)
    return (

        <>
            <li>{category}</li>
        </>

    )
}
