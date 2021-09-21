import React from 'react'
import first_menu from "../images/menu-1.png"
import second_menu from "../images/menu-2.png"
import third_menu from "../images/menu-3.png"
import fourth_menu from "../images/menu-4.png"
import fifth_menu from "../images/menu-5.png"
import sixth_menu from "../images/menu-6.png"

const Menu = () => {
    return (
        <>
            <section className="menu_section">
                <div className="container">
                    <div className="row">

                        <h1 className="menu_heading"> Our <span className="menu_head">Menu</span></h1>

<div className="container">
<div className="row">
                    <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="card menu_data" >
                    <img className="card-img-top" src={first_menu} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Tasty And Healty</h5>
                        <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                    </div>
                    </div>


                    <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="card menu_data" >
                    <img className="card-img-top" src={second_menu} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Tasty And Healty</h5>
                        <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="card menu_data" >
                    <img className="card-img-top" src={third_menu} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Tasty And Healty</h5>
                        <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                    </div>
                    </div>


                   

                    <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="card menu_data" >
                    <img className="card-img-top" src={fourth_menu} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Tasty And Healty</h5>
                        <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="card menu_data" >
                    <img className="card-img-top" src={fifth_menu} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Tasty And Healty</h5>
                        <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="card menu_data" >
                    <img className="card-img-top" src={sixth_menu} alt="Card image cap" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">Tasty And Healty</h5>
                        <p className="card-text">$15.99<span><del className="menu_prize">20.99</del></span></p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
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

export default Menu
