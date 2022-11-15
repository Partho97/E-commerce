import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Shazam</h1>
            <p>It's our goal to create an e-commerce experience that is functional, easy to use and aesthetically pleasing. We believe that the best way to do this is through the use of a responsive design. This allows us to create a site that works across all devices, including mobile phones and tablets.
The design will be responsive from start to finish, meaning that we'll take into account your specific layout when designing the site so that it looks good on every device. We want you to feel as though you're browsing in a personal space rather than looking at something off-site!
We want people to be able to find what they're looking for quickly and easily—and we want them to have fun doing it! We've made sure that everything on the site is organized in an intuitive way so that it's easy for users of all ages and backgrounds.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>AA-47,Prafulla Kanan,Kestopur,Kolkata-700101 </li>
              <li>Email: parthakrde@gmail.com</li>
              <li>Phone: +91 9062681888</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
