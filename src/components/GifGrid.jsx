import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => { // Asegúrate de desestructurar category de los props


    // el hook personalizado useFetchGifs toma como argumento category y hace una busqueda de los gifs en base a ese nombre 
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {/* ¨Ponerlo entre llaves hace que sea una expresion de JavaScrit en este caso evalua que si isLoading es true se mostrara el mensaje de cargando y si es false no se mostrara nada, eso quiere decir que mientras haya GIFS no mostrata ningun mensaje  */}
            {
                isLoading && ( <h2>Cargando...</h2>) 
            }

{/* aqui es donde finalmente renderizamos la card con diseño ya que tiene el className
--Hacemos un mapeo en images y lanzamos una funcion por cada GIF dentro del array images
--Para ello tambien tendremos otro componente que GifItem que siempre se debe de enviar una key para poder identificar facilmente y con el {...image} enviamos toda la informacion como props hacia ese componenten y ahi vera el que chchs hace 
 */}
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
