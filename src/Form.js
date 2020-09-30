import React,{useState,useContext} from 'react'
import { Context } from './Context'

export default function Form() {

    const {AddList} = useContext(Context)
    const [text,setText] = useState('')

    const onSubmit =(e)=>{
        e.preventDefault()
        //add todo
        AddList(text)
        setText('')
    }

    return (
        <div>
        <form id="to-do-form" onSubmit={onSubmit}>
        <input type='text' placeholder="Enter Todos" value={text} onChange={e=>setText(e.target.value)}/>
        <button type="submit">Add</button>
         </form>
        </div>
    )
}

