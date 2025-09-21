import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from "./pages/Home";
import Man from "./pages/Man";
import Women from './pages/Women';
import Kids from './pages/Kids';
import Contact from './pages/Contact';
import Customize from './pages/Customize';

import AdminDashBoard from './AdminDashBoard';
import AddProduct from './adminpages/AddProduct';
import MyCart from './pages/MyCart';
import CheckOut from './pages/CheckOut';
import PaymentDone from './pages/PaymentDone';
import OrderList from './adminpages/OrderList';

import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Login from './loginpages/Login';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Layout Routes */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/man" element={<Man />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/customize" element={<Customize/>} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/mycart" element={<MyCart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/paydone" element={<PaymentDone />} />

            
           
            
        
          </Route>

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminDashBoard />}>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="orderlist" element={<OrderList />} />
          </Route>

          <Route path="/login" element={<Login/>}/> 

                      
        </Routes>
      </BrowserRouter>

      {/* ✅ Global ToastContainer (only once in the whole app) */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
};

export default App;
