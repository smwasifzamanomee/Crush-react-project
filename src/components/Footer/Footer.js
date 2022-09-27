import React from 'react'
import './Footer.module.css'

const Footer = () => {
  return (
        <footer>
        <div className='container'>
          <div>
            Copyright &copy;2022.
          </div>
          <div class="textRight">
            Built with OmeeDev <span class="red"></span> by
            <a
              href="https://reactjs.org/docs/create-a-new-react-app.html"
              target="_blank">Create React App</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer