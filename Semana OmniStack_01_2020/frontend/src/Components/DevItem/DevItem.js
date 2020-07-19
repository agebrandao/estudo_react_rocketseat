import React, { useState, useEffect } from 'react';
import './DevItem.css';

function DevItem( props ) {

    const { dev } = props;
    
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}>
                </img>
            </header>
        </li>
    )
}

export default DevItem;