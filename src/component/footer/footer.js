import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Email, Business } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    textAlign: "center",
    mt: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "10px 50px",
  },
  contact: {
    color: "#526cd0",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Typography variant="body1" sx={{ mb: 1 }}>
        In case of any concern,{" "}
        <strong className={classes.contact}>
          contact us<Link href="mailto:contact@moksh.com"></Link>
        </strong>
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <span>&copy;</span> {new Date().getFullYear()} www.moksh.com. All rights
        reserved.
      </Typography>
      <Typography variant="body2">Moksh @corporation</Typography>
    </Box>
  );
};

export default Footer;
