const getGifs = async() => {
    // Estamos creando la forma de comunicarnos con una API
        const url = `HTPPS\\falsa.com=${category}&limit=20` // estamos escogiendo la cartegoria con las llaves y estamos limitando la cantidad de elementos a 20
        // si vamos a usar el await debemos usar async cuando creamos al funcion flecha ahi arriba
        const resp = await fetch(url)
        // vamos a destructurar la data que es donde esta toda la informacion que necesitamos 
        const { data } = await resp.json()
        console.log(resp);
        console.log(data);


        const gifs =data.map( img => ({
            id: img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }))

        console.log(gifs);
        return(gifs)
}


GifGrid() //Cuando llamemos a esta funcion lo que tendremos seran 2 respuestas por algo que todavia nos nos explica