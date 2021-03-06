import React from 'react'
import styles from './styles/NotFound404.css'

export default function NotFound404() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <a href="/">Go To Home!</a>
            </div>
        </div>
    )
}
