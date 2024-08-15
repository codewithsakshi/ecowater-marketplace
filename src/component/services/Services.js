import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import MuiAlert from "@mui/material/Alert";
import Carousel from "../carousel/carousel";
import Carousel2 from "../carousel/carousel2";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  snackbar: {
    position: "fixed",
    right: "-100%",
    top: "0%",
  },
}));

const images = [
  "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1677824410346-64daa536a611?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const inputBgColor = process.env.REACT_APP_INPUT_BG_COLOR || "white";

const StyledTextField = styled(TextField)({
  backgroundColor: inputBgColor,
});

const sampleItems = [
  {
    service: "Water installation",
    image:
      "https://images.unsplash.com/photo-1616996690916-a4d9af24295d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "2 year warranty (Filters included)",
    brand: "Rephile",
    price: "8000",
    name: "purifier",
  },
  {
    service: "water quality test",
    image:
      "https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/images/172/558/f0ac33a7-8b88-4967-8394-7c5bc2da8330/640/f0ac33a7-8b88-4967-8394-7c5bc2da8330.jpg",
    description: "ATC range −5 - 105 °C BNC connector",
    brand: "Model|MP120",
    price: "500",
    name: "Mettler Toledo portable pH",
  },
  {
    service: "Water filter",
    image:
      "https://f.media-amazon.com/images/I/61pTRuXsTLL._AC_UY436_FMwebp_QL65_.jpg",
    description: "Cartridge Compatible for 10 Inch Pre-Filter",
    brand: "Konvio",
    price: "499",
    name: "Water Purifier",
  },
  {
    service: "Water catridges",
    image:
      "https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Replacement water cartridges.",
    brand: "koneo",
    price: "30",
    name: "Mettler",
  },
  {
    service: "Water installation",
    image:
      "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Installation of water systems.",
    brand: "koneo",
    price: "100",
    name: "Tape",
  },
  {
    service: "water quality test",
    image:
      "https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/images/314/520/e9e43263-de04-4f68-a348-7221d7c54008/640/e9e43263-de04-4f68-a348-7221d7c54008.jpg",
    description: "for use with MCOLORTEST",
    brand: "watertec",
    price: "300",
    name: "oxygenates",
  },
  {
    service: "Water filter",
    image:
      "https://f.media-amazon.com/images/I/41WRLtVov7L._SY445_SX342_QL70_FMwebp_.jpg",
    description: "Water filtration system.",
    brand: "watertecs",
    price: "299",
    name: "oxygenates",
  },
  {
    service: "Water catridges",
    image:
      "https://plus.unsplash.com/premium_photo-1667520303636-9406c2da2e8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Replacement water cartridges.",
    brand: "koneo",
    price: "199",
    name: "watertec",
  },
];

const AppointmentForm = () => {
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const classes = useStyles();

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBookAppointment = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalOpen(false);
  };

  const handleConfirm = () => {
    const appointmentDetails = {
      name,
      mobileNumber,
      address,
      date,
      service,
    };

    localStorage.setItem(
      "appointmentDetails",
      JSON.stringify(appointmentDetails)
    );
    setModalOpen(false);
    setSnackbarOpen(true);
    setTimeout(() => {
      setSnackbarOpen(false);
    }, 3000);
  };

  const filteredItems = sampleItems.filter(
    (item) =>
      item.service === service &&
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box
        component="form"
        sx={{ display: "flex", gap: 2, margin: "0 auto", mt: 4, mx: 8 }}
      >
        <StyledTextField
          label="Appointment Date"
          type="date"
          value={date}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          sx={{ width: 250 }}
        />
        <FormControl fullWidth sx={{ width: 250 }}>
          <InputLabel>Service</InputLabel>
          <Select
            value={service}
            onChange={handleServiceChange}
            label="Service"
          >
            <MenuItem value="Water installation">Water installation</MenuItem>
            <MenuItem value="water quality test">Water quality test</MenuItem>
            <MenuItem value="Water filter">Water filter</MenuItem>
            <MenuItem value="Water catridges">Water cartridges</MenuItem>
          </Select>
        </FormControl>
        {service && (
          <StyledTextField
            label="Search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            sx={{ width: 250 }}
          />
        )}
      </Box>
      {!service && <Carousel2 images={images} />}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          sx={{
            my: 4,
            mx: 8,
            border: "1px solid #D3D3D3",
            width: "fit-content",
            borderRadius: "8px",
          }}
        >
          {filteredItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                width: 500,
                m: 3,
                paddingBottom: 2,
                borderBottom: "1px solid #D3D3D3",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 150, borderRadius: "8px", height: 150 }}
                image={item.image}
                alt={item.description}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h7">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    {item.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 4,
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography component="div" variant="h8">
                      {item.brand}/Rs. {item.price}
                    </Typography>
                    {/* <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Rs. {item.price}
                </Typography> */}
                  </Box>
                  <Button
                    variant="contained"
                    onClick={handleBookAppointment}
                    sx={{ textTransform: "capitalize" }}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Box>
            </Box>
          ))}
        </Box>
        {service && <Carousel images={images} />}
      </Box>
      <Dialog open={modalOpen} onClose={handleClose}>
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogContent>
          <StyledTextField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
          <StyledTextField
            label="Mobile Number"
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
          <StyledTextField
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        classes={{ root: classes.snackbar }}
      >
        <MuiAlert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Your appointment has been booked successfully!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default AppointmentForm;
