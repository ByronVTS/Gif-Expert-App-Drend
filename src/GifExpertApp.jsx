import { useState } from "react"



export const GitExpertApp = () => {
  
  const [categories, setcategories] = useState(['One Punch', 'Death Note'])
  console.log(categories);

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* Listado de gif */}
        <ol>
          {
            categories.map( category => {
              return <li key={category}>{category}</li>
          })
          }
        </ol>

        {/* GIF item */}

    </>
  )
}
