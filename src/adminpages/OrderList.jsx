import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../CSS/OrderList.css";


const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    
  //  let api=`${import.meta.env.VITE_API_URL}/products`;
  let api = "http://localhost:3000/ClientOrder";
      const response = await axios.get(api);
      setOrders(response.data);
    
  };

  return (
    <div>
      <h2>Customer Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>City</th>
            <th>Products Name</th>
            <th>Total Amount</th>
            <th>Contact</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.city}</td>
              <td>{order.products}</td>
              <td>₹{order.totalAmount}</td>
              <td>{order.contactNo}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
