import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./style.scss";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ background: "white" }} className="appbar">
      <div className="navbar-wrapper">
        <Toolbar disableGutters>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
            }}
          >
            <MenuItem>
              {/* <AllInclusive
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              /> */}
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={Logo} alt=" " className="logo" />
              </Typography>
            </MenuItem>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "coral"}}
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
              <MenuItem>
                <Typography>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "coral",
                      display: "flex",
                    }}
                  >
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "coral",
                      display: "flex",
                    }}
                  >
                    About
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "coral",
                      display: "flex",
                    }}
                  >
                    Products
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "coral",
                      display: "flex",
                    }}
                  >
                    Contact
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Link
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              background: "#222",
            }}
          >
            {/* <AllInclusive sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                background: "red",
              }}
            >
              <img src={Logo} alt=" " className="logo" />
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem sx={{ my: 2, color: "white", display: "block" }}>
              <Typography sx={{ paddingRight: "10px", paddingLeft: "10px"}}>
                <Link to="/" className="link">
                  Home
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem sx={{ my: 2, color: "white", display: "block" }}>
              <Typography sx={{ paddingRight: "10px", paddingLeft: "10px"}}>
                <Link to="/" className="link">
                  About
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem sx={{ my: 2, color: "white", display: "block" }}>
              <Typography sx={{ paddingRight: "10px", paddingLeft: "10px"}}>
                <Link to="/" className="link">
                  Products
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem sx={{ my: 2, color: "white", display: "block" }}>
              <Typography sx={{ paddingRight: "10px", paddingLeft: "10px"}}>
                <Link to="/" className="link">
                  Contact
                </Link>
              </Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;