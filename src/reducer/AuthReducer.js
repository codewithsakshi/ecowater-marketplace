// // src/AuthReducer.js
// export const initialState = {
//     isAuthenticated: false,
//     user: null,
//     loading: false,
//     error: null,
//   };
  
//    const authReducer = (state, action) => {
//     switch (action.type) {
//       case 'CHECK_AUTH':
//         return {
//           ...state,
//           isAuthenticated: !!action.payload,
//           user: action.payload,
//           loading: false,
//           error: null,
//         };3
//       case 'SIGNIN_SUCCESS':
//         return {
//           ...state,
//           isAuthenticated: true,
//           user: action.payload,
//           loading: false,
//           error: null,
//         };
//       case 'SIGNUP_SUCCESS':
//         return {
//           ...state,
//           isAuthenticated: true,
//           user: action.payload,
//           loading: false,
//           error: null,
//         };
//       case 'SIGNOUT':
//         return {
//           ...state,
//           isAuthenticated: false,
//           user: null,
//           loading: false,
//           error: null,
//         };
//       case 'AUTH_ERROR':
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case 'LOADING':
//         return {
//           ...state,
//           loading: true,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer