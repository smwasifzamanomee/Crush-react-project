import React from 'react'
import './IceCream.module.css'
import Scoop from './Scoop/Scoop'

const iceCream = () => {
  return (
    <div>
        <div>
            <div className="icecream">
              <p className="cone"></p>
              {/* <p>Please start adding scoops</p>  */}
              {/* scoops has come */}
              <Scoop />
              <div className="cherry"></div>
            </div>
          </div>
    </div>
  )
}

export default iceCream