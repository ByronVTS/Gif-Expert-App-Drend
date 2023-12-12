import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GitExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Death Note'])

  const onAddCategory = () => {
    setCategories([...categories , "Family spy" ])
  }
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory setCategories={setCategories}/>

        {/* Listado de gif */}
        <ol>
        {categories.map((category, index) => (
    <li key={index}>{category}</li>
  ))}
        </ol>

        {/* GIF item */}

    </>
  )
}
