import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Front from './comp/Front'
function App() {
const [first, setfirst] = useState(0)
const [dataApi, setDataApi] = useState([])

useEffect(() => {
  let url="http://localhost:8090/v1/persona"
axios.get(url)
    .then(res=> setDataApi(res.data))
    .catch(err=> console.log(err))
}, [])

console.log(dataApi)
  return (
    <>
     <div>
     <h1>
  
      {dataApi.map(e=>
          <div>
            <h2>{e.nombre}</h2> 
            <h2>{e.edad}</h2> 
            <h2>{e.correo}</h2> 
          </div>
        )}</h1> 
     </div> 
      <Front/>
     
    </>
  )
}

export default App
