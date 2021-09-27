const apiKey = "UZgHd8Zauhexa000EvqDLpZHOGJx9UdD";
// https://api.giphy.com/v1/gifs/random?api_key=UZgHd8Zauhexa000EvqDLpZHOGJx9UdD

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then( (response) => response.json())
  .then( ( data ) => {
    if (data.data)
    {
      console.log("data exists")
      const realData = data.data
      const {url} = realData.images.original;
      const img = document.createElement('img');
      img.src = url;
      document.body.append(img);      
    } else{
      console.log("No data", data)
    }

  })
  .catch(console.log)