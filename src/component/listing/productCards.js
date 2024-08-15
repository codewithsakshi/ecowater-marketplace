import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
  Grid,
} from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, getSubtotalPrice, getCartCount } from "../../action/cartAction";
import { addToCart, getSubtotalPrice, getCartCount } from "../../action";

const getGoogleDriveImageUrl = (driveLink) => {
  const fileIdMatch = driveLink.match(/[-\w]{25,}/);
  return fileIdMatch
    ? `https://drive.google.com/uc?export=view&id=${fileIdMatch[0]}`
    : null;
};

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 330,
  margin: "auto",
  marginTop: "2px",
  height: 350,
  position: "relative",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    padding: "20px", // Adding padding on hover
    "& .MuiCardMedia-root": {
      height: "85%",
      width: "100%",
    },
    "& .hoverContent": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
    },
    "& .cardContent": {
      display: "none", // Hide content on hover
    },
  },
}));

const HoverContent = styled("div")({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "100%",
  width: "100%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "87.5%",
  backgroundColor: "#1976d2",
  color: "white",
  borderRadius: 0,
  padding: "8px",
  position: "absolute",
  bottom: "15px",
}));

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleAddToCart = (item) => {
    console.log("cart", item)
    dispatch(addToCart(item));
    dispatch(getCartCount());
    dispatch(getSubtotalPrice());
  };

  return (
    <StyledCard key={product._id}>
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent className="cardContent">
        <Typography gutterBottom variant="h7" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h7" color="text.primary">
          Rs. {product.price}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Brand: {product.manufacturer}
        </Typography>
      </CardContent>
      <HoverContent className="hoverContent">
        <StyledButton
          variant="contained"
          onClick={() => handleAddToCart(product)}
        >
          Add to Basket
        </StyledButton>
        {/* <StyledButton variant="contained">
          Add to Basket
        </StyledButton> */}
      </HoverContent>
      {/* <div>Total Cart Quantity: {totalCartQuantity}</div> */}
    </StyledCard>
  );
};

const ProductList = ({ products }) => {
  return (
    <Box sx={{ px: 4, my: 4 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
