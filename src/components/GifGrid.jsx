import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, loading, error} = useFetchGifs(category);
    

    return (
        <>
            <h3>{category}</h3>
            {
                (loading) && (<p>Cargando....</p>)
            }
            <div className="card-grid">
                {
                    (!error)
                    ? images.map((image) => (
                        <GifItem
                            key={image.id}
                            { ...image }
                        />
                    ))
                    : <p>{error}</p>
                }
            </div>
        </>
    )
}
