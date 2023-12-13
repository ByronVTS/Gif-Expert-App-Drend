import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('Vegeta')

    // esta funcion se ejecuta cada vez que haya una modificaion el input del formulario ya que se ejecuta por el onChange
    // el evento de onChange en un input se ejecuta cuando existe cambios del contenido que tiene en este caso texto
    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }


    // el onSubmit es cuando enviamos el formulario y en este caso se ejecuta cuando hacemos solo enter
    // primero evitamos que se recarge la pagina con el        event.preventDefault() por que el formulario tiene predeterminado la recarga de la pagina
    // Validamos que el texto del input no este vacio o que tenga mas de 1 caracter si pasa esta validacion con el "return" podemos pasar al siguiente paso 
    // Actualizamos la categoria con el inputValue que actualizamos antes y con .trim() borramos todos los espacios del final y del principio 
    // y reseteamos el input con setinputValue('') para que quede vacio despues del enter

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <=1 ) return;
        onNewCategory(inputValue.trim())
        setinputValue('')
    }


    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
