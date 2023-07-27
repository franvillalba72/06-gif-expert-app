import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newValue = inputValue.trim()
        if (newValue.length <= 1) return;
        
        onNewCategory( newValue );
        setInputValue('');
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
