import React from 'react'
import App from './App.js'

function Nav(){
    return(
        <div>
            <h2 onClick={handleP}>👈Previous</h2>
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
            </div>
            <h2 onClick={handleNextChange()}>Next👉</h2>
        </div>
    )
}

export default Nav;