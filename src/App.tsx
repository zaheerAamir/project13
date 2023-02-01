import { useState } from 'react'
import image from './assets/icons8-menu-rounded-50.png'
import image1 from './assets/icons8-twitter-50.png'
import './App.css'

function App() {
  const [divopen, setdivopen] = useState(false)

  const click = () => {
    setdivopen(!divopen)
  }

  return (
    <>
      <nav className='navbar'>
        <div className={'hamburger'}>
          <img src={image} alt=''/>
        </div>
        <img className='logo'/>
        <input className='search' accept='text' placeholder='search' color='black' />
        <div className='icons'>icons</div>
      </nav>

      <main>
        <div className='block1'></div>
        <div className='cont'>
          <h1>My Name, My Pride</h1>
          <p>100 visiting card at Rs 180</p>
          <button className='btn1'>Shop now</button>
        </div>
        <div className='block2'></div>
        <div className='cont1'>
          <h1>My Name, My Pride</h1>
          <p>100 visiting card at Rs 180</p>
          <button className='btn1'>Shop now</button>
        </div>
      </main>

      <section className='middle1'>
        <h1 className='products_header'>Our Most Popular Products</h1>
        <div className='card_cont'>
          <div className='card_link'>
            <div className='rect_card'></div>
            <a className='link' href=''>Link 1</a>
          </div>
          <div className='card_link'>
            <div className='rect_card'></div>
            <a className='link' href=''>Link 1</a>
          </div>
        </div>
      </section>

      <footer id='bottom1'>
      <div className='big'>
          <h1 >Easy Returns: </h1>
          <h1 >Free Replacement or Full Refund</h1>
        </div>
        <div className='small' onClick={click}>
          <ul>
            <p>Let us help</p>
            <li>My Account</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='small'>
          <ul>
            <p>Our Company</p>
            <li>Careers</li>
            <li>For Investors</li>
            <li>For Media</li>
            <li>Sustainability</li>
            <li>Annual Returns</li>
          </ul>
        </div>
        <div className='small'>
          <ul>
            <p>Our Policies</p>
            <li>Terms and Conditions</li>
            <li>Privacy and Cookie Policy</li>
            <li>Copyright matters</li>
            <li>Patents & trademarks</li>
          </ul>
        </div>
       </footer>
      <footer id='bottom2'>
        <p className='foot_cont'>
          A CIMPRESS company © 2001-2022 Vistaprint. All rights reserved.
          Unless stated otherwise, prices are exclusive of delivery and product options.
        </p>
      </footer>
    </>
  )
}

export default App
