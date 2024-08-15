import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  capitalize,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import {
//   updateCartQuantity,
//   deleteCartItem,
//   getSubtotalPrice,
//   getCartItems,
//   getCartCount,
// } from "../../action/cartAction";
import {
  updateCartQuantity,
  deleteCartItem,
  getSubtotalPrice,
  getCartItems,
  getCartCount,
} from "../../action";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#858d97",
  textTransform: "capitalize",
}));

const CartList = ({ product }) => {
  const totalPrice = product.price * product.quantity;
  const dispatch = useDispatch();

  const updateQuantity = (itemId, quantity) => {
    dispatch(updateCartQuantity(itemId, quantity));
    dispatch(getCartCount());
    dispatch(getSubtotalPrice());
  };

  const deleteItem = (item) => {
    dispatch(deleteCartItem(item));
    dispatch(getCartCount());
    dispatch(getSubtotalPrice());
  };

  return (
    <Box
      sx={{
        padding: 2,
        borderBottom: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flexShrink: 0, width: 150, height: 150 }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          width="150"
          height="150"
        />
      </Box>
      <Box sx={{ flexGrow: 1, padding: "0 16px" }}>
        <Typography variant="body1">{product.category}</Typography>
        <Typography variant="body1">{product.manufacturer}</Typography>
        <Typography variant="body1">{product.name}</Typography>
      </Box>
      <Box sx={{ padding: "0 16px" }}>
        <Typography variant="body1">Rs. {product.price.toFixed(2)}</Typography>
      </Box>
      <Box sx={{ padding: "0 16px", width: 120 }}>
        <FormControl variant="outlined" size="small" sx={{ width: 100 }}>
          <InputLabel id="quantity-label">Quantity</InputLabel>
          <Select
            labelId="quantity-label"
            value={product.quantity}
            onChange={(e) => updateQuantity(product._id, e.target.value)}
            label="Quantity"
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "inherit",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "inherit",
              },
            }}
          >
            {[...Array(10)].map((_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StyledButton onClick={() => deleteItem(product._id)}>
          Remove
        </StyledButton>
      </Box>
      <Box sx={{ padding: "0 16px" }}>
        <Typography variant="body1">Rs. {totalPrice}</Typography>
      </Box>
    </Box>
  );
};

export default CartList;
