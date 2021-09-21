import React from 'react'
import card_first from "../images/blog-1.jpeg"
import card_second from "../images/blog-2.jpeg"
import card_third from "../images/blog-3.jpeg"

const Blog = () => {
    return (
        <>
            <section className="blog_section">

            <div className="container">
                <div className="row">
                <h1 className="about_heading">Our <span className="about_us">Blogs</span></h1>
                </div>

                <div className="container">
                    <div className="row">

                            <div className="col-12 col-md-4 col-lg-4">
                               <div className="card blog_img" >
                                <img className="card-img-top" src={card_first} alt="Card image cap"/>
                                <div className="card-body blog_info">
                                    <h5 className="card-title">Tasty And Refreshing Coffee</h5>
                                    <h3>By Admin / 21st May, 2021</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn" data-toggle="modal" data-target="#exampleModalLong">Read More</a>

      
   <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

                                </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-4 col-lg-4">
                               <div className="card blog_img" >
                                <img className="card-img-top" src={card_second} alt="Card image cap"/>
                                <div className="card-body blog_info">
                                    <h5 className="card-title">Tasty And Refreshing Coffee</h5>
                                    <h3>By Admin / 21st May, 2021</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn" data-toggle="modal" data-target="#exampleModalLong">Read More</a>

  <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


                                </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-4 col-lg-4">
                               <div className="card blog_img" >
                                <img className="card-img-top" src={card_third} alt="Card image cap"/>
                                <div className="card-body blog_info">
                                    <h5 className="card-title">Tasty And Refreshing Coffee</h5>
                                    <h3>By Admin / 21st May, 2021</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn"data-toggle="modal" data-target="#exampleModalLong">Read More</a>

  <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
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

export default Blog
