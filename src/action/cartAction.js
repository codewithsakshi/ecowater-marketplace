
// export const addToCart = (item) => ({
//     type: "ADD_TO_CART",
//     payload: item,
//   }
//   );
  
//   export const updateCartQuantity = (itemId, quantity) => ({
//     type: "UPDATE_CART_QUANTITY",
//     payload: { itemId, quantity },
//   });
  
//   export const deleteCartItem = (itemId) => ({
//     type: "DELETE_CART_ITEM",
//     payload: itemId,
//   });
  
//   export const getCartCount = () => {
//     return (dispatch, getState) => {
//       const cartItems = getState().cart.cartItems;
//       const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//       dispatch({ type: "GET_CART_COUNT", payload: totalItems });
//     };
//   };
  
//   export const getCartItems = () => ({
//     type: "GET_CART_ITEMS",
//   });
  
//   export const getSubtotalPrice = () => ({
//     type: "GET_SUBTOTAL_PRICE",
//   });
  
//   export const clearCart = () => ({
//     type: "CLEAR_CART",
//   });
  