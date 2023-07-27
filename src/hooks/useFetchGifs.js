import { useCallback, useEffect, useState } from "react";

export const useFetchGifs = (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QyNn5Q7bmt5uH8kOtRUB6rKPZZCBOYcA&q=${category}&limit=10`;

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Usamos useCallback para que fetchData no se esté creando cada vez que se renderiza la página
    const fetchData = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error al consumir la api');
            const {data} = await response.json();

            const gifs = data.map(img => ({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }));
    
            setImages(gifs);
        } catch (error) {
            setError(error.message);
            setImages([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return {images, loading, error};
}
