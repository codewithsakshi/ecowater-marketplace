// // cartSaga.js
// import { takeLatest, put, call } from 'redux-saga/effects';
// // import { getCartCountSuccess, getCartCountFailure } from '../action/cartAction';
// import { getCartCount } from '../action/cartAction';

// function* getCartCountSaga() {
//   try {
//     // const cartItems = yield call(fetchCartItems); // Example: Fetch cart items from an API
//     const cartItems = localStorage.getItem("cartItems")
//     const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//     // yield put(getCartCountSuccess(totalItems));
//   } catch (error) {
//     // yield put(getCartCountFailure(error.message));
//   }
// }

// export default function* cartSaga() {
//   yield takeLatest("GET_CART_COUNT", getCartCountSaga);
// }
