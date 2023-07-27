import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.find(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />

            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))
            }

        </>
    )
}
