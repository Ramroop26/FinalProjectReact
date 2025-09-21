import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {
  const navigate = useNavigate();
  const CartData = useSelector(state => state.mycart.cart);

  let totalAmount = 0;
  const ans = CartData.map((key) => {
    totalAmount += key.price * key.qnty;
    return key.name;
  });

  const products = ans.join(", ");
  const [input, setInput] = useState({});
 

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      let api = "http://localhost:3000/ClientOrder";
      const response = await axios.post(api, { ...input, products: products,totalAmount: totalAmount, });
      console.log("Order saved:", response.data);
       toast('Order Successfull Place !!!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",transition: Bounce,
});

    navigate("/paydone"); // ✅ navigate only after success
    
      
  };

  return (
    <>
      <h1>CheckOut</h1>
      <h6 align="center"> Products : {products} </h6>
      <h3 align="center"> Net Payble Amount : {totalAmount} </h3>

      <Form style={{ margin: "auto", width: "400px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter City</Form.Label>
          <Form.Control type="text" name="city" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Shipping Address</Form.Label>
          <Form.Control type="text" name="address" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Contact No.</Form.Label>
          <Form.Control type="text" name="contactNo" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Pin Code</Form.Label>
          <Form.Control type="text" name="pinCode" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Date</Form.Label>
          <Form.Control type="date" name="date" onChange={handleInput} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>Submit </Button>
      </Form>
      
    </>
  );
};

export default CheckOut;
