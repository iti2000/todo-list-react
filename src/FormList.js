
import React,{useContext} from 'react'
import { Context } from './Context'
import ListItem from './ListItem'


export default function FormList() {

    const {List} = useContext(Context)

    return (
        <div>
            <ul>
               {
                   List.length > 0 && 
                   List.map((i)=>{
                        return (<ListItem text={i.text} id={i.id} key={i.id} />)
                   })
               }
            </ul>
        </div>
    )
}
