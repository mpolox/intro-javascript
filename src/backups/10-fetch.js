const apiKey = "UZgHd8Zauhexa000EvqDLpZHOGJx9UdD";
// https://api.giphy.com/v1/gifs/random?api_key=UZgHd8Zauhexa000EvqDLpZHOGJx9UdD

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( (response)=> {
//     response.json().then(
//         (data) => {
//             console.log(data);
//         }
//     )
// }).catch(
//     () => {
//         console.log("nel")
//     }
// )

peticion
  .then( (response) => response.json())
  .then( ( {data} ) => {
    const { url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.log)