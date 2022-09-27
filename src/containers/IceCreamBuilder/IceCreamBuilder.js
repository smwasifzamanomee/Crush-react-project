import React, { Component } from 'react'
import IceCream from '../../components/IceCream/IceCream'
import Builder from '../../components/Builder/Builder'
import './IceCreamBuilder.module.css'

export default class IceCreamBuilder extends Component {
  render() {
    return (
      <div className="container">
        <IceCream />
        <Builder />
      </div>
    )
  }
}
