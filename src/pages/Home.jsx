import ban4 from '../images/ban4.webp';
import ban2 from '../images/ban2.webp';
import ban3 from '../images/ban3.webp';
import ban1 from '../images/ban1.webp';
import ban6 from '../images/ban6.webp';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../cartSlice';
import "../CSS/Home.css";





const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();



  const loadData = async () => {

    // let api=`${import.meta.env.VITE_API_URL}/products`;
    let api = "http://localhost:3000/products"
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(() => {
    loadData();
  }, [])
  const ans = mydata.map((key) => {
    return (
      <>
        <Card style={{ width: '18rem', margin: "10px" }}>
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
            <Button variant="primary"
              onClick={() => {
                if (!isLoggedIn) {
      navigate("/login"); // Redirect to login page
      return;
    }
                 dispatch(addTocart({ id: key.id, name: key.name, brand: key.brand, category: key.category, price: key.price, images: key.images, qnty: 1 })) }}>Add To Cart</Button>
             

          </Card.Body>
        </Card>

      </>
    )
  })


  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={ban1} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoes Store</h2>
            <h1> <b id='sh'>Shoes</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban2} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoes Store</h2>
            <h1> <b id='sh'>Shoes</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban3} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoes Store</h2>
            <h1> <b id='sh'>Shoes</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban4} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoe Store</h2>
            <h1> <b id='sh'>Shoes</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ban6} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoes Store</h2>
            <h1> <b id='sh'>Shoe</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="marquee-container">
  <div className="marquee-content">
    🔥 New Arrivals: Nike Air Max 2025 | ⚡ Flat 20% Off on Running Shoes | 👟 Limited Edition Jordans Available Now | 🚚 Free Delivery on Orders Above ₹2000
  </div>
</div>


      <h3>Nike Shoes Store</h3>
      <h1> Out Top Collections</h1>





      <div id='topshoes' style={{ width: "90%", margin: "auto" }}>

        {ans}

      </div>


    </>
  )
}
export default Home;