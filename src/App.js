import React from 'react'
import './App.css'
import Layout from './Layout/Layout'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Body />
        <Footer />
      </Layout>
    </div>
  )
}

export default App
