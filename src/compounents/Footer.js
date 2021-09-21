import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
          
                <section className="footer">

<div className="share">
    <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
    <a href="https://twitter.com/" className="fab fa-twitter"></a>
    <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
    <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
    <a href="https://in.pinterest.com/" className="fab fa-pinterest"></a>
</div>

<div className="links">
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
    <Link to="/menu">menu</Link>
    <Link to="/products">products</Link>
    <Link to="/review">review</Link>
    <Link to="/contact">contact</Link>
    <Link to="/blog">blogs</Link>
</div>

<div className="credit">created by <span>mr. suraj </span> | all rights reserved</div>

</section>
               
        </>
    )
}

export default Footer
