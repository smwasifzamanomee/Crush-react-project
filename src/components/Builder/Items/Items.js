import React from 'react'
import './Items.module.css'
import Item from './Item/Item'


const Items = () => {
  return (
    <div>
        <div class="react" id="items">
                <ul>
                    <Item />
                </ul>
        </div>
    </div>
  )
}

export default Items