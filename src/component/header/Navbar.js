import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Menu,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { makeStyles } from "@mui/styles";
import { ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
// import { getCartCount } from "../../action/cartAction";
import { getCartCount } from "../../action";

const useStyles = makeStyles((theme) => ({
  navLink: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  menuLink: {
    textDecoration: "none",
    textAlign: "center",
    padding: "-10px 0",
  },
  badge: {
    top: -8,
    right: -8,
    fontSize: 12,
  },
}));

const pages = ["Products", "Services", "Subscription", "Discussion"];
const settings = ["Profile", "Account", "My Products"];

function ResponsiveAppBar() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.totalItems);
  console.log("cart count", cartCount)

  useEffect(() => {
    dispatch(getCartCount());
  }, [dispatch]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: "#354f52" }}>
        <Toolbar disableGutters>
          <Link to="/">
            <img src="/logo.svg"></img>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", mx: 2 }}
                  className={classes.navLink}
                >
                  {page}
                </Button>
              </Link>
            ))}
            <Link to="/sellwithus">
              <Button
                key="sellwithus"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", mx: 2 }}
                className={classes.navLink}
              >
                Sell with us
              </Button>
            </Link>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <Box sx={{ mx: 3, mt: 2 }}>
              <Link to="/cart">
                <Tooltip title={`Items in Cart: ${cartCount}`}>
                  <IconButton sx={{ color: "white" }}>
                    <Badge
                      badgeContent={cartCount}
                      color="error"
                      className={classes.badge}
                    >
                      <ShoppingCart fontSize="large" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{ px: 4 }}
                  >
                    <Link to={setting} className={classes.menuLink}>
                      <Button
                        key={setting}
                        onClick={handleCloseNavMenu}
                        sx={{
                          textTransform: "capitalize",
                          color: "black",
                          margin: "-20px",
                        }}
                      >
                        {setting}
                      </Button>
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem
                    onClick={handleCloseUserMenu}
                    sx={{ px: 4 }}
                  >
                    <Link to="#" className={classes.menuLink}>
                      <Button
                        onClick={handleCloseNavMenu}
                       sx={{
                          textTransform: "capitalize",
                          color: "black",
                          margin: "-20px",
                        }}
                      >
                      Signup
                      </Button>
                    </Link>
                  </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
