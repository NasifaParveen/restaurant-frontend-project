import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row}from 'react-bootstrap';



function App() {
  const [data,Setdata]=useState([])
  const fetchdata=async()=>{
    try{
const response=await fetch('/restaurants.json')
// console.log(response)
const result=await response.json()
// console.log(result)
Setdata(result.restaurants)
    }
    catch(e){
console.log(e)
    }
  
    
  }
  useEffect(()=>{fetchdata()},[])
  console.log(data)
  return (
    <div className='bg-black'>
          <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className='text-light'><span className='text-danger'>R</span>estaurant</Navbar.Brand>
        </Container>
      </Navbar>
      <Row>
        {data.map((data,index)=>(
        <Col sm={6} md={4} lg={3} key={data.id}>      
            <Card style={{ width: '18rem',backgroundColor:"black",color:'white' }}>

      <Card.Img variant="top" src= {data.photograph}/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.address}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Col>
    ))}
    </Row>
  </div>
  )
}

export default App
