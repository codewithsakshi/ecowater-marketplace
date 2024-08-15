import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  iconPreview: {
    color: "#D8D9DA",
  },
  button: {
    border: 0,
    backgroundColor: "#1eb4e1",
    color: "#fff",
    width: "250px",
    padding: "11px 0",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const EmptyShoppingBasket = () => {
  const classes = useStyles();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          border: "2px solid #D8D9DA",
          borderRadius: "50%",
          p: 4,
          mb: 2,
        }}
      >
        <ShoppingBasketOutlinedIcon
          sx={{ fontSize: 100 }}
          className={classes.iconPreview}
        />
      </Box>
      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 3, color: "#82d2ec", fontSize: "30px" }}
      >
        An empty shopping basket is a lonely shopping basket.
        <br />
        Go on, add something!
      </Typography>
      <Link to="/products">
        <button variant="contained" className={classes.button}>
          Start Shopping
        </button>
      </Link>
    </Container>
  );
};

export default EmptyShoppingBasket;
