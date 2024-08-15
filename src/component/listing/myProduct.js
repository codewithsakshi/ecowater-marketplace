import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  // Load products from local storage
  useEffect(() => {
    const storedProducts = localStorage.getItem("sellWithUsData");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Remove product by id
  const removeProduct = (productCode) => {
    const updatedProducts = products.filter(
      (product) => product.productCode !== productCode
    );
    setProducts(updatedProducts);
    localStorage.setItem("sellWithUsData", JSON.stringify(updatedProducts));
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      className={products.length < 6 ? "center-carousel" : ""}
    >
      {products.map((product) => (
        <Box
          key={product.productId}
          sx={{
            width: 210,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.productName}
            sx={{ height: 280 }}
          />
          <Box>
            <Typography gutterBottom variant="subtitle1" component="div">
              {product.productName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "-10px" }}
            >
              {product.productDescription}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="subtitle2" color="text.primary">
                {product.brandName}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.primary"
                sx={{ marginLeft: "10px" }}
              >
                Rs. {product.price}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => removeProduct(product.productCode)}
            sx={{}}
          >
            Remove
          </Button>
        </Box>
      ))}
    </Carousel>
  );
};

export default MyProducts;
