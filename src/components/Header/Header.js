import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faCloud} from "@fortawesome/free-solid-svg-icons";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="grid-layout__header">
        <nav className="flex-layout">
            <div className="flex-layout flex-layout__logo">
                <a href="#" ><FontAwesomeIcon icon={faCloud}/>Climate And Temperature</a>

            </div>
        </nav>
    </header>
    )
}