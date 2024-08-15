// // reducer.js

// const initialState = {
//     cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "ADD_TO_CART":
//         const existingCartItems =
//           JSON.parse(localStorage.getItem("cartItems")) || [];
//         const newItem = action.payload;
//         const existingProductIndex = existingCartItems.findIndex(
//           (item) => item._id === newItem._id
//         );
  
//         if (existingProductIndex !== -1) {
//           // If item already exists, update its quantity
//           existingCartItems[existingProductIndex].quantity += 1;
//         } else {
//           // If item doesn't exist, add it to the cart
//           existingCartItems.push({ ...newItem, quantity: 1 });
//         }
//         localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
//         return {
//           ...state,
//           cartItems: existingCartItems,
//         };
//       case "UPDATE_CART_QUANTITY":
//         const { itemId, quantity } = action.payload;
//         const updatedCartUpdate = state.cartItems.map((item) => {
//           if (item._id === itemId) {
//             return { ...item, quantity };
//           }
//           return item;
//         });
//         localStorage.setItem("cartItems", JSON.stringify(updatedCartUpdate));
//         return {
//           ...state,
//           cartItems: updatedCartUpdate,
//         };
//       case "DELETE_CART_ITEM":
//         const updatedCartDelete = state.cartItems.filter(
//           (item) => item._id !== action.payload
//         );
//         localStorage.setItem("cartItems", JSON.stringify(updatedCartDelete));
//         return {
//           ...state,
//           cartItems: updatedCartDelete,
//         };
//       case "GET_CART_COUNT":
//         console.log("count")
//         return {
//           ...state,
//           totalItems: state.cartItems.reduce(
//             (acc, item) => acc + item.quantity,
//             0
//           ),
//         };
//       case "GET_CART_ITEMS":
//         return {
//           ...state,
//           cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
//         };
//       case "GET_SUBTOTAL_PRICE":
//         return {
//           ...state,
//           totalPrice: state.cartItems.reduce(
//             (acc, item) => acc + item.price * item.quantity,
//             0
//           ),
//         };
//       case "CLEAR_CART":
//         localStorage.removeItem("cartItems");
//         return {
//           ...state,
//           cartItems: [],
//           totalItems: 0,
//           totalPrice: 0,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;
  