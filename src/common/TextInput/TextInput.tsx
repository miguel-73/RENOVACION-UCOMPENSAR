import React from 'react'
import "../Style/Style.css"
import { InputText } from "primereact/inputtext";


type Props = {
  id:string,
  text:string,
  
}

export const TextInput = (props:Props)=>  {
  return (
    <div className="flex flex-column gap-2">
        <label htmlFor="codebien" className='texto'>{props.text}</label>
        <InputText id={props.id} className="inputText" />       
    </div>
  )
}


export const TextInputDisabled = (props:Props)=>  {
  return (
    <div className="flex flex-column gap-2">
        <label htmlFor="codebien" className='texto'>{props.text}</label>
        <InputText id={props.id} className="inputTextDisabled" disabled placeholder='' />       
    </div>
  )
}


