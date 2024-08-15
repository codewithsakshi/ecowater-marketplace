import React, { useEffect, useState } from "react";
import { Box, Container, Typography, List } from "@mui/material";
import CartList from "./cartList";
import CheckoutDetails from "./checkoutDetails";
import { useDispatch, useSelector } from "react-redux";
// import { getCartItems } from "../../action/cartAction";
import { getCartItems } from "../../action";
import EmptyShoppingBasket from "./emptyShoppingCart";

const CartData = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartItems);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <Container sx={{ width: "60%" }}>
      <List>
        <Box
          sx={{
            padding: 2,
            borderBottom: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexShrink: 0, width: 150 }}>Item</Box>
          <Box sx={{ flexGrow: 1, padding: "0 16px" }}>Description</Box>
          <Box sx={{ padding: "0 16px" }}>
            <Typography variant="body1">Price</Typography>
          </Box>
          <Box sx={{ padding: "0 16px", width: 120 }}>Quantity</Box>
          <Box sx={{ padding: "0 16px" }}>TotalPrice</Box>
        </Box>
        {products.map((product) => (
          <CartList product={product} />
        ))}
      </List>
    </Container>
  );
};

const CartPage = () => {
  const products = useSelector((state) => state.cartItems);
  return (
    <Box>
      {products?.length ? (
        <Box
          sx={{
            display: "flex",
            mx: 2,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <CartData />
          <CheckoutDetails></CheckoutDetails>
        </Box>
      ) : (
        <EmptyShoppingBasket />
      )}
    </Box>
  );
};

export default CartPage;
