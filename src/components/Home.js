import React from 'react'
import { useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';

const Home = () => {
    const [inpval,setInpval] = useState({
        name:'',
        email:'',
        data:'',
        password:''
    })
    console.log(inpval)
    const getData= (e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        // console.log(name,value)
        setInpval(()=>{
            return{
                ...inpval,[name]:value
            }
        })
        
    }
  return (
    <div className="container">
    <section className='d-flex justify-content-between'>
        <div className='left_data mt-3 p-3' style={{width:"100%"}}>
            <h3 className='text-center'>sign Up</h3>

    <Form>
      <Form.Group className="mb-3 col-lg-6 " controlId="formBasicName">
        <Form.Control type="text" name='name' onChange={getData} placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 mt-2" controlId="formBasicEmail">
        <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 mt-2" controlId="formBasicDate">
        <Form.Control type="date" name='date' onChange={getData}/>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className="col-lg-6 mt-2 mb-2">
        Submit
      </Button>
    </Form>

    <p>
        Already Have an Account ? <span>SignIn</span>
    </p>
        </div>
        
        <Sign_img/>
    </section>
    </div>
  )
}

export default Home
