import React from 'react'
import { Link } from 'react-router-dom'

const Navitem = (props) => {
    return (
        <li className='nav-item'>
            <Link className='nav-link text-white' to={props.url}>
                {props.name}
            </Link>
        </li>
    )
}

export default Navitem
