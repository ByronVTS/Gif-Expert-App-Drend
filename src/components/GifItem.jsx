import React from 'react'

export const GifItem = ({title,url, id}) => {

// desde el componente de GifGrid estamos enviado los props en forma de propagacion, por ello tenemos acceso a todos los "datos"
//  <GifItem
//           key={image.id}
//            {...image}
//      />
  return (
        <div className='card'>

            <img src={url} alt={title}></img>
            <p>{title}</p>
            
        </div>
    )
}
