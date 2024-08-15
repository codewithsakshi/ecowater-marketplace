import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Snackbar,
  Box,
} from "@mui/material";
// import { getSubtotalPrice, getCartCount } from "../../action/cartAction";
import { getSubtotalPrice, getCartCount } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  snackbar: {
    position: "fixed",
    right: "-100%",
    top: "0%",
  },
}));

const CheckoutDetails = ({ onCheckout }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const subtotalPrice = useSelector((state) => state.totalPrice);
  const totalItems = useSelector((state) => state.totalItems);
  const products = useSelector((state) => state.cartItems);

  const [address, setAddress] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    dispatch(getSubtotalPrice());
    dispatch(getCartCount());
  }, [dispatch]);

  const handleCheckoutClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddressSubmit = () => {
    setOpenDialog(false);
    setOpenSnackbar(true);
    // dispatch(clearCart());
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  return (
    <Card variant="outlined" sx={{ width: "30%", margin: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="subtitle1">
          Subtotal ({totalItems} items): Rs. {subtotalPrice}
        </Typography>
        <Typography variant="subtitle2">
          Payment Mode: Cash on delivery.
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "crimson" }}>
          Estimated delivery within 4-5 days.
        </Typography>
        <Button
          variant="contained"
          onClick={handleCheckoutClick}
          sx={{
            mt: 2,
            width: "100%",
            textTransform: "capitalize",
            fontSize: "16px",
          }}
        >
          Checkout Now
        </Button>
      </CardContent>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Enter Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your delivery address to proceed with the checkout.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddressSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
        autoHideDuration={3000}
        className={classes.snackbar}
        message="Your order has been placed successfully"
      />
    </Card>
  );
};

export default CheckoutDetails;
