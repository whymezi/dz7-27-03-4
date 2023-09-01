import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './LayOut.css'

export const LayOut = () => {
    return (
        <div>
            <header >
                <Link to="/">Главная котятная</Link>
                <Link to="/courses">Котятки</Link>
                <Link to="/about">Наши котяточки</Link>
            </header>

            <Outlet/>

            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    )
}
