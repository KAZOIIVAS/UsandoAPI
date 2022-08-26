
console.log("Si funciona el index");


const obtenerimg = async () => {
    const url = ` https://api.nasa.gov/planetary/apod?api_key=cA9MGQ6SiXCr10ciYgyoVG5VKewOU7ir0dgfjU6F&count=3`
  
    const obtenerdatos = await fetch(url)
  
    const data = await obtenerdatos.json()
  
    console.log('data', data);

    const contenedor = document.getElementById('container-img')
    console.log(contenedor);
    data.forEach(item => {
        contenedor.innerHTML += `
        <div class="carousel-item active">
        <img src="${item.url}" class="d-block w-100" alt="${item.explanation}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.title}</h5>
          <p>${item.explanation}</p>
          <p>${item.date}</p>
        </div>
          
        `
      })
   // renderizar(data.data)
  
  }
 
    const btsbuscarf=document.getElementById('btn-f')

const obtenerasteroidesfecha= async()=>{
console.log("si entra a las fechas")
   const fechaini= document.getElementById('fecha-ini').value
    const fehcafin= document.getElementById('fecha-fin').value

    const url= `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaini}&end_date=${fehcafin}&api_key=cA9MGQ6SiXCr10ciYgyoVG5VKewOU7ir0dgfjU6F`

    const obtenerdatos = await fetch(url)
  
    const data = await obtenerdatos.json()
  
    console.log('data', data);
}



const obtenernum= async()=>{
  const btnnum =document.getElementById("numas").value
console.log(btnnum);
   

    const url=`https://api.nasa.gov/neo/rest/v1/neo/${btnnum}?api_key=cA9MGQ6SiXCr10ciYgyoVG5VKewOU7ir0dgfjU6F`
    const obtenerdatos = await fetch(url)
  
    const data = await obtenerdatos.json()
  
    console.log('data', data);
}


  obtenerimg();
 /*
const renderizar= (res)=>{
  const container = document.getElementById('container-img')
  //container.innerHTML = ''
  res.forEach(item => {
    container.innerHTML += `
      <div>
         <h1>No se rompio <h1/>
        <img src="${item.url}" />
        <p>${item.title}</p>
        <p></p>
      </div>
    `
  })
}
//const validateInput = () => {
    obtenerimg();
  //}
/*

const getCharacters = async () => {
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1651339658&apikey=35755cd339fd7c676339edf8d57fcc37&hash=324da40eb91c741cbd78f922f02b65f5&limit=50`

  const getData = await fetch(url)

  const data = await getData.json()

  console.log('data', data)

}

const getCharacterName = async () => {

  const input = document.getElementById('personaje').value

  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${input}&ts=1651339658&apikey=35755cd339fd7c676339edf8d57fcc37&hash=324da40eb91c741cbd78f922f02b65f5&limit=50`

  const getData = await fetch(url)

  const data = await getData.json()

  console.log(data)

  renderData(data.data.results)

}


const renderData = (results) => {
  const container = document.getElementById('container-data')
  container.innerHTML = ''
  results.forEach(item => {
    container.innerHTML += `
      <div>
        <img src="${item.thumbnail.path + '.' + item.thumbnail.extension}" />
        <p>${item.name}</p>
        <p></p>
      </div>
    `
  })
}

const validateInput = () => {
  getCharacters()
}
*/ 