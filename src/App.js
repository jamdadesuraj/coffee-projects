import React from 'react'
import Navbar from "./compounents/Navbar"
import Home from "./compounents/Home"
import About from "./compounents/About"
import Contact from "./compounents/Contact"
import Menu from "./compounents/Menu"
import Products from "./compounents/Products"
import Review from "./compounents/Review"
import Blog from "./compounents/Blog"
import Footer from "./compounents/Footer"
import {Route,Switch} from "react-router-dom"


const App = () => {
  return (
    <>
       <Navbar/>
<Switch>
       <Route exact path="/">
       <Home/>
       <About/>
       <Menu/>
       <Products/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
       </Route>
       
       <Route exact path="/about">
       <About/>
       <Footer/>
       </Route>
       
      <Route exact path="/menu">
        <Menu/>
        <Footer/>
      </Route>

      <Route exact path="/products">
      <Products/>
      <Footer/>
      </Route>


      <Route exact path="/Review">
      <Review/>
      <Footer/>
      </Route>

       <Route exact path="/contact">
       <Contact/>
       <Footer/>
       </Route>

       <Route exact path="/Blog">
       <Blog/>
       <Footer/>
       </Route>
      
</Switch>
    </>
  )
}

export default App
