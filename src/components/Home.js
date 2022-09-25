import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {
  return (
    <div className="container">
    <section className='d-flex justify-content-between'>
        <div className='left_data mt-3 p-3' style={{width:"100%"}}>
            <h3 className='text-center'>sign Up</h3>

    <Form>
      <Form.Group className="mb-3 col-lg-6 " controlId="formBasicName">
        <Form.Control type="email" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 mt-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 mt-2" controlId="formBasicDate">
        <Form.Control type="date"/>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className="col-lg-6 mt-2 mb-2">
        Submit
      </Button>
    </Form>

    <p>
        Already Have an Account ? <span>SignIn</span>
    </p>
        </div>
        <div className='right_data mt-6' style={{width:"100%"}}>
            <div className='sign_img'>
                <img src="https://image.shutterstock.com/image-vector/tiny-male-female-characters-huge-260nw-1982734184.jpg" alt=""/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home
