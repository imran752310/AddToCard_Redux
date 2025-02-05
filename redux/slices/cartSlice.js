import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = [];

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {id,title,image,price} = action.payload;
      state.push({id, title, image, price, qty:1});

      // console.log(action.payload)
      // const { id, title, price, image } = action.payload;
      // // Check if the item already exists in the cart
      // const existingItem = state.find((item) => item.id === id);

      // if (existingItem) {
      //   // If the item exists, update the quantity
      //   existingItem.qty += 1;
      // } else {
      //   // If the item doesn't exist, add it to the cart
      //   state.push({ id, title, price, qty: 1, image });
      // }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
    },
  },
});

//export the reducers(actions)
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from "@redux/toolkit";

// //Create Initial State
// const initialState = [
//   {
//     id: 1,
//     title: "Camera 1",
//     price: 300,
//     qty: 1,
//   },
// ];

// //Create the slice with Reducers
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const { id, title, price, qty } = action.payload;
//       state.push({ id, title, price, qty });
//     },
//     removeFromCart: (state, action) => {
//       const cartId = action.payload;
//       return state.filter((item) => item.id === cartId);
//     },
//   },
// });

// //export the reducers(actions)
// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
