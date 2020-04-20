import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <div className="Navbar">
            <h1 className='Navbar_title'>کریپتو یار</h1>
            <ul className='Navbar_list'>
                <li><NavLink exact to='/'>لیست انتخابی</NavLink></li>

                <li><NavLink exact to='/'>مقایسه</NavLink></li>

            </ul>
        </div>
    )
}
export default Navbar