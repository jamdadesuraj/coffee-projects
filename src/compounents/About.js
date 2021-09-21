import React from 'react'
import about from "../images/about-img.jpeg"




const About = () => {
    return (
        <>
        
            <section className="about_section">
                <div className="container">
                    <div className="row">
                   <h1 className="about_heading">About <span className="about_us">Us</span></h1>
                  </div>
                    

                <div className="row about_section_first">
                    <div className="col-12 col-md-6 col-lg-6">
                   <img src={about} alt="about img" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 about_data">
                   <h1>What Makes Our Coffee Special?</h1>
                   <p>The difference between specialty and “regular” coffee lies mainly in the quality of coffee beans. As Gaku notes, not all coffee beans are created equal. In fact, according to the pyramid of coffee bean quality, they can be divided into three main categories.</p>

<button type="button" className="btn" data-toggle="modal" data-target="#exampleModalLong">Learn More</button>



<div className="modal fade " id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">What Makes Our Coffee Special?</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      The process illustrates how coffee is produced.

It is clear that, there are a total of 11 stages in the picture, begin with picking the coffee beans and culminating in packing into jars.

To begin the process, the coffee beans are picked on the field coffee before are dried in sunlight. And next step, they have to be roasted in the oven. After they are cooled rapidly to reduce moisture, they are ground.Once this step has been done, they have to be mixed with hot water and strained in this mixture. Following the period manufactured the coffee, the frozen liquid is the result of freeze the mixture and then grind them. The water is radiated in the drying process in a vacuum. Finally, the coffee is packed into jars and labeled to distributed for the market. And the coffee ready to be used.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      
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

export default About
