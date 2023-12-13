import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GitExpertApp = () => {
  
  const [categories, setCategories] = useState(['Death Note'])

  // Como funciona: Recibe un argumento que en este caso es una nueva categoria que vino desde otro componente con un input 
  // 1. verifica que dentro de CATEGORIES esta incluido  la nueva categoria 
  // 2. si NO esta incluido este actualizara el array y lo ponga primer, "[newCategory , ...categories]" en este orden hace que se agrega la nueva categoria de primero y despues las demas tengamos en cuenta que esto afecta como se renderiza en la aplicacion 
  
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return 
    setCategories([newCategory , ...categories])
  }


  // como funciona la prop en este caso 
  // En el comoponente de AddCategory tenemos entre parentesis {onNewCategory} lo que lo hace prop
  // Lo podemos llamar como si fuese una funcion         onNewCategory(inputValue.trim()) 
  // lo que hace es que ese argumento  "inputValue.trim()" lo envia hacia la funcion que nosotros definimos en GifExpertApp
  // algo asi onNewCategory={onAddCategory(inputValue.trim())} es como si lo estuvieramos teletransportando ya que estos componentes estan conectados por ese prop
  


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
          onNewCategory={onAddCategory}
        />
        {/* Renderizamos lo siguiente,  el .map mapea todos los elementos del array categories y le agregamos una funcion por cada vez que recorre uno de los elementos 
        - Nombramos a ese elemento como category (no es una constante solo es una asignacion dentro de la funcion)
        -- por cada category llamamos a un componente quien renderiza los gifs 
        -- este componente recibe 2 propiedades una KEY que debe ser unica y en este caso tiene el mismo nombre (recordemos que anteiormente validamos que no existe ya un nombre de categoria igual)
        --el CATEGORY tiene funciones diferentes dentro del componente GifGrid 
         */}
           {
            categories.map((category ) => (
              <GifGrid 
              key={category} 
              category={category}/>
            ))
          }
    </>
  )
}
