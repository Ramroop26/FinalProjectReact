import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../cartSlice';
import "../CSS/Home.css";

const Kids= () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      let api = "http://localhost:3000/products";
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <Card style={{ width: '18rem', margin: "10px" }} key={key.id}>
        <Card.Img variant="top" src={key.images} height="200" />
        <Card.Body>
          <Card.Title>{key.brand}</Card.Title>
          <Card.Text>
            {key.name}
            <br />
            <span style={{ color: "red" }}>Category : {key.category}</span>
            <br />
            <span style={{ color: "navy", fontWeight: "bold" }}>Price : {key.price}</span>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              if (!isLoggedIn) {
                navigate("/login"); // Redirect to login page
                return;
              }
              dispatch(addTocart({
                id: key.id,
                name: key.name,
                brand: key.brand,
                category: key.category,
                price: key.price,
                images: key.images,
                qnty: 1
              }));
            }}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      
      <h3>Nike Kids Shoes Store</h3>
      <h1> 👟Out Top Collections</h1>
      <div id='topshoes' style={{ width: "90%", margin: "auto", display: "flex", flexWrap: "wrap" }}>
        {ans.length > 0 ? ans : <p>No products found.</p>}
      </div>
    </>
  );
};

export default Kids;
