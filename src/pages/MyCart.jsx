import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { incQunty, decQunty, cartDataRemove, order } from "../cartSlice";
import "../CSS/MyCart.css";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const CartData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let TotalAmount = 0;
  const ans = CartData.map((key) => {
    TotalAmount += key.price * key.qnty;

    // ✅ Buy Now Handler
    const handleBuyNow = () => {
      dispatch(order({ id: key.id })); // order action
      navigate("/checkout", { state: { product: key } }); // particular product checkout page पर भेजना
    };

    return (
      <tr key={key.id}>
        <td>
          <img src={key.images} width="100" height="100" alt={key.name} />
        </td>
        <td>{key.name}</td>
        <td>{key.brand}</td>
        <td>{key.category}</td>
        <td>{key.price}</td>
        <td>
          <FaSquareMinus onClick={() => dispatch(decQunty({ id: key.id }))} />
          {key.qnty}
          <FaPlusSquare onClick={() => dispatch(incQunty({ id: key.id }))} />
        </td>
        <td>{key.price * key.qnty}</td>
        <td>
          <button onClick={() => dispatch(cartDataRemove({ id: key.id }))}>
            Delete
          </button>
        </td>
        <td>
          <button onClick={handleBuyNow}>Buy Now</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>Cart Data</h1>
      <h3 align="center">
        Total Amount : <FaRupeeSign /> {TotalAmount}
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Images</th>
            <th style={{ width: "400px" }}>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Delete</th>
            <th>Buy Now</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default MyCart;
