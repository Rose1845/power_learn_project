import React from 'react'
import Courses from '../components/Courses'
import Programs from '../components/Programs'


const Home = () => {
  return (
    <div className='d-flex flex-column'>
        
        <div className='d-flex pt-5'>
        <div className=''>
            <h3>THE PLP ADVANTAGE</h3>
            <h1>Impact</h1>
            <p>Africa faces a huge digital skills gap that<br/> dilutes economic opportunities and development caused largely <br/>in part by lack of access and in-affordability. We offer free and accessible tech education to bridge this gap.</p>
        </div>
        <div className="card mx-3" style={{width:'18rem'}}>
          <img src="..." className="card-img-top " alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
        </div>
        <div className="card mx-3"style={{width:'18rem'}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        <div className="card" style={{width:'18rem'}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
       
        </div>
        <Programs/>
        <Courses/>
    </div>
        
        
  )
}

export default Home