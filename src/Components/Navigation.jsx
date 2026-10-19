import React from 'react'

const Navigation = () => {
  return (
    <div>
       <nav className="container">
        <div className='logo'>
          <img src="./brand_logo.png" alt='logo'></img>
        </div>

           <ul>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
           </ul>

           <button type='submit'>Login</button>
      </nav>
    </div>
  )
}

export default Navigation;