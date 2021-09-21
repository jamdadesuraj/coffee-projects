import React from 'react'

import pic_first from "../images/pic-1.png"
import second_pic from "../images/pic-2.png"
import third_pic from "../images/pic-3.png"

const Review = () => {
    return (
        <>
            <section className="customer_section">
                <div className="container">
                    <div className="row ">
                    <h1 className="review_heading">CUSTOMER'S <span className="product_header">REVIEW</span></h1>
                    </div>

            <div className="container">
                <div className="row">

                    
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="review">
                    <div className="swiper-container review-slider">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={pic_first} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p className="review_para">Food is, of course, a great way to meet people and make friends. When people share a meal, you can be sure the discussions about food, restaurants and recipes are going to be endless..</p>
            </div>
             </div>
            </div>
            </div>
            </div>



                <div className="col-12 col-md-4 col-lg-4">
                    <div className="review">
                    <div className="swiper-container review-slider">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={second_pic} alt=""/>
                    <div className="user-info">
                        <h3>Sophia</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p className="review_para">Food is, of course, a great way to meet people and make friends. When people share a meal, you can be sure the discussions about food, restaurants and recipes are going to be endless..</p>
            </div>
             </div>
            </div>
            </div>
            </div>



                <div className="col-12 col-md-4 col-lg-4">
                    <div className="review">
                    <div className="swiper-container review-slider">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={third_pic} alt=""/>
                    <div className="user-info">
                        <h3>james</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p className="review_para">Food is, of course, a great way to meet people and make friends. When people share a meal, you can be sure the discussions about food, restaurants and recipes are going to be endless..</p>
            </div>
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

export default Review
