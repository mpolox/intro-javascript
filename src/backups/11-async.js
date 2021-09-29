const  getImagen = async () => {
  try {
    const apiKey = "UZgHd8Zauhexa000EvqDLpZHOGJx9UdD";
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await respuesta.json();
    const {url} = data.images.original;
  
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);        
  } catch (error) {
    console.log("Algo fallo")
  }

}

getImagen();
