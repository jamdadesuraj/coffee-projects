import React from 'react'
import home from "../images/home-img.jpeg"


const Home = () => {
    return (
        <>
            
            <section className="home_section">
                <div className="container">
                    <div className="row">
                    
 <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={home} alt="First slide"/>

      <div className="carousel-caption  home_data">
    <h5>FRESH COFFEE IN THE MORNING</h5>
    <p>"Drinking a cup of coffee with your eyes closed isn't a sophisticated task for a person, but it's hard for a robot."</p>
    <button type="button" className="  " id="home_btn"  >Get Yours Now</button>


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

export default Home
