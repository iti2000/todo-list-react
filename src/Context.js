import React, { createContext, useState,useEffect} from 'react'
import uuid from 'react-uuid'

export const Context = createContext()

export const ContextProvider = (props) => {
    
    
    const [List, setList] = useState([])
    
    
    useEffect(()=>{
        let list = JSON.parse(localStorage.getItem('trans'))
        setList(list)
    },[])

    useEffect(() => {
        localStorage.setItem("trans",JSON.stringify(List))
    }, [List])

    const AddList = (text)=>{
            setList([...List,{
                id : uuid(),
                text
            }])
    }

    const DeleteList = (idToDelete)=>{
        setList(List.filter(
            (x) =>  x.id !== idToDelete
        ))
    }


    return(
        <Context.Provider value={{
            List,
            AddList,
            DeleteList
        }} >
            {props.children}
        </Context.Provider>
    )
}
