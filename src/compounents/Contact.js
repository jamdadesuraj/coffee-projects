import React from 'react'

const Contact = () => {
    return (
        <>
           <section className="about_section">
                <div className="container">
                    <div className="row">
                   <h1 className="about_heading">Contact <span className="about_us">Us</span></h1>
                  </div>
                    

                <div className="row about_section_first">
                    <div className="col-12 col-md-6 col-lg-6">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

                    </div>
                    <div className="col-12 col-md-6 col-lg-6 about_data">
                    <form>
  <div className="form-group contact_form">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name"/>
  </div>
  <div className="form-group contact_form">
    <label for="formGroupExampleInput2">Email</label>
    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email"/>
  </div>
  <div className="form-group contact_form">
    <label for="formGroupExampleInput2">Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your number"/>
  </div>
</form>
                   <button type="button" className="btn">Contact Now</button>
                    </div>
                    </div>
               </div>
              
            </section>

        </>
    )
}

export default Contact
