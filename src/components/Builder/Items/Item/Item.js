import React from 'react'
import './Item.module.css'

const Item = () => {
    return (
        <div><li className="react item">
            <span>Vanilla</span>
            <span className="quantity">2</span>
            <div className="right">
                <button type="button" className="plus rounded">+</button>
                <button type="button" className="minus rounded">-</button>
            </div>
        </li>

        </div>
    )
}

export default Item