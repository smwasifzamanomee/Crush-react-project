import React from 'react'
import './Builder.module.css'
import Items from './Items/Items'
import TotalPrice from './TotalPrice/TotalPrice'
import Modal from './Modal/Modal'

const Builder = () => {
    return (
        <div>
            <div className="react">
                <div className="builder">
                    <h3>Build your own Ice Cream Sundae</h3>

                    <Items />
                    <TotalPrice />
                    <button type="button" className="order rounded">
                        Add to Cart
                    </button>
                </div>
                <Modal>
                    hello modal
                </Modal>
            </div>
        </div>


    )
}

export default Builder