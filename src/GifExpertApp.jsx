import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GitExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Death Note'])

  const onAddCategory = (newCategory) => {
    console.log(newCategory);    
    // categories.push(newCategory)
    setCategories([newCategory , ...categories])
  }
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory
          // setCategories={setCategories}
          onNewCategory={onAddCategory}
         />

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
