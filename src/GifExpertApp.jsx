import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GitExpertApp = () => {
  
  const [categories, setcategories] = useState(['One Punch', 'Death Note'])

  const onAddCategory = () => {
    setcategories([...categories , "Family spy" ])
  }
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory/>

        {/* Listado de gif */}
        <button onClick={onAddCategory}>Agregar</button>
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
