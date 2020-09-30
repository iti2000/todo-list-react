import React, { useContext } from 'react'
import { Context } from './Context'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function ListItem({id,text}) {

    const {DeleteList} = useContext(Context)

    const deleteList = () => {
        DeleteList(id)
    }

    return (
            <li><p>{text}
                <span>
                    <FontAwesomeIcon className="facions" icon="trash" onClick={deleteList}/>
                </span>
                </p>
            </li>
       
    )
}
