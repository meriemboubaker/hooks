import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import StarRatingComponent from 'react-star-rating-component';
import myIcon from '../icon.png'



const Filter =({titre,rate})=>{
 
    return(
    <Navbar bg="light" expand="lg">
   
    <img href="#home" src={myIcon} style={{width:'60px',height:'60px'}}/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Form inline>
      
      <div className='container-2'>
      <FormControl
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            onChange={e=>titre(e.target.value)}
          />
           <StarRatingComponent
              name='star'
                starCount={5}
                onStarClick={r=>rate(r)}
          
                />   
              </div>
              
              
       
      </Form>
    </Navbar.Collapse>
  </Navbar>

    );
}
export default Filter;