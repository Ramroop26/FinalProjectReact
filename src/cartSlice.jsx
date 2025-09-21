import { createSlice } from "@reduxjs/toolkit";
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
    orders: []   // ✅ नया state add किया order के लिए
  },
  reducers: {
    addTocart: (state, actions) => {
      const status = state.cart.filter((key) => key.id == actions.payload.id);
      if (status.length >= 1) {
       
toast('Product Already Added!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",transition: Bounce,
});

      } else {
        state.cart.push(actions.payload);
      }
    },

    incQunty: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          state.cart[i].qnty++;
        }
      }
    },

    decQunty: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          if (state.cart[i].qnty <= 1) {
            // alert("Quantity not less than 1");
            toast('Quantity not less than 1', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",transition: Bounce,
});
          } else {
            state.cart[i].qnty--;
          }
        }
      }
    },

    // ✅ Buy Now → Order Reducer
    order: (state, actions) => {
  const product = state.cart.find((item) => item.id === actions.payload.id);

  if (product) {
    // Cleaned data (sirf zaroori fields rakho)
    const cleanProduct = {
      id: product.id,
      name: product.name, // ✅ unwanted text remove
      brand: product.brand,
      category: product.category,
      price: product.price,
      qnty: product.qnty,
      images: product.images
    };

    state.orders.push(cleanProduct); // ✅ clean data save in orders
  }
},


    cartDataRemove: (state, actions) => {
      state.cart = state.cart.filter(
        (item) => item.id != actions.payload.id
      );
    },

    clearCart: (state) => {
      state.cart = [];
    },

  }
});


export const { addTocart, incQunty, decQunty, order, cartDataRemove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
