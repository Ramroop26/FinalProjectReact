import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/AddProduct.css';


const AddProduct = () => {
  const [input, setInput] = useState({});
  const [image, setImage] = useState("");

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }))

    console.log(input);
  }
  
  const handleImage = async (e) => {
    setImage(e.target.files[0]);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

     const CloudAPI = "https://api.cloudinary.com/v1_1/dkm5xgamv/image/upload";
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "shoesite");

    const response = await axios.post(CloudAPI, formData);
    console.log(response.data);
    console.log(response.data.url);
    // let api=`${import.meta.env.VITE_API_URL}/products`;
    let api = "http://localhost:3000/products";
    const res = await axios.post(api,{...input, images:response.data.url});
    console.log(res.data);
    
    toast('Data Successfully Save !!!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",transition: Bounce,
});
  }



  return (
    <>
      <h2> Add New Product</h2>
      <Form style={{ width: "500px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Product Brand</Form.Label>
        <Form.Select name="brand" aria-label="Default select example" onChange={handleInput}>
      <option>Select Brand</option>
      <option value="brooks">BROOKS</option>
      <option value="hoka">HOKA</option>
      <option value="nike">Nike</option>
       <option value="Adidas">Adidas</option>
        <option value="Altra">Altra</option>
    </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Category</Form.Label>
       
       <Form.Select name="category" aria-label="Default select example" onChange={handleInput}>
      <option>Select Category</option>
      <option value="male">Male shoe</option>
      <option value="female">Female shoe</option>
      <option value="kids">Kids shoe</option>
    </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price </Form.Label>
          <Form.Control type="text" name="price" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Upload Product Image</Form.Label>
          <Form.Control type="file" name="file" onChange={handleImage} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}> Submit</Button>
      </Form>
     
    </>
  )
}

export default AddProduct;