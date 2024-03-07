import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const front = () => {
const {handleSubmit, register}= useForm()
    const [dataPost, setDataPost] = useState({})
    /*
    useEffect(() => {
        let url="http://localhost:8090/v1/persona"
        axios.post(url, data)
            .then(res=>console.log(res))
            .catch()

    }, [])
    */
  const enviar=(data)=>{
    console.log(data)
    console.log("hola")
  }
  return (
    <div>
        <form onSubmite={handleSubmit(enviar())}>
            <div>
                <label>nombre</label>
            <input type={"text"} id={"nombre"} {...register('nombre')}></input>
            </div>
            <div>
                <label>edad</label>
        <input type={"text"} id={"edad"}{...register('edad')}></input>
            </div>
            <button>send</button>
        </form>

    </div>
  )
}

export default front