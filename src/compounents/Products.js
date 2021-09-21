import React from 'react'
import first_product from "../images/product-1.png"
import seconsd_product from "../images/product-2.png"
import third_product from "../images/product-3.png"

const Products = () => {
    return (
        <>
            <section className="products_section">
               <div className="conatiner">
                   <div className="row">
                   <h1 className="product_heading">OUR <span className="product_header">PRODUCTS</span></h1>
                   </div>

<div className="container">
<div className="row">

                   <div className="col-12 col-md-4 col-lg-4 ">
                   <div className="card product_data" >             
                    <img className="card-img-top" src={first_product} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Fresh Coffee</h5>
                        <div className="product_stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                    </div>
                    </div>
                    </div>


                   <div className="col-12 col-md-4 col-lg-4 ">
                   <div className="card product_data" >             
                    <img className="card-img-top" src={seconsd_product} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Fresh Coffee</h5>
                        <div className="product_stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                    </div>
                    </div>
                    </div>



                   <div className="col-12 col-md-4 col-lg-4 ">
                   <div className="card product_data" >             
                    <img className="card-img-top" src={third_product} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Fresh Coffee</h5>
                        <div className="product_stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                    </div>
                    </div>
                    </div>


</div>
  </div>                  
               </div>
            </section>
        </>
    )
}

export default Products
