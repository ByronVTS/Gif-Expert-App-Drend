import { useState } from 'react'
// import {GitExpertApp} from '../GifExpertApp'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('Dr Stone')

    const onInputChange = (event) => {
        setinputValue(event.target.value)
        // console.log(event.target.value);
        // setcategories([...categories , event.target.value ])

    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <=1 ) return;
        // console.log(inputValue);
        setCategories( categories => [inputValue, ...categories ])
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
