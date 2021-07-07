import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import myIcon from "../icon.png";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Description = ({location,match}) => {
    

    const film=location.state.list.find(elm=>elm.id===match.params.id)
    console.log(film)

    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Link to='/'>
      <img
        href="#home"
        src={myIcon}
        alt="logo"
        style={{ width: "60px", height: "60px" }}
      />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline></Form>
      </Navbar.Collapse>
    </Navbar>
        <div className='desc-2'>
        <Card.Img src={film.img} alt='moviePoster' className='poster'/>
        <div className='desc-1'>
        <Card.Title >{film.title}</Card.Title>
        <Card.Text style={{width:"60%"}}> {film.bio}</Card.Text>
        
        
        <iframe width="560" height="315" src={film.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        
        <Link to='/'>
            <Button className="home">HOME</Button>
        </Link>
        </div>
        </div>
        
        </div>
    
        

    )

}
export default Description;