import React, { useState } from "react";
import Logo from "../icons/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled, alpha } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InputBase from "@mui/material/InputBase";
import "./navbar.css";

const Navbar = () => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <div className="nav">
      <div className="first">
        <img className="logo" src={Logo} alt="" />
        <div className="p">
          <h2>PUTATOE</h2>
          <p>One Solution</p>
        </div>
      </div>
      <div className="second">
        <div className="search">
          <StyledInputBase
            placeholder="Search for products..."
          />
          <IconButton type="button">
            <SearchIcon className="si" />
          </IconButton>
        </div>
      </div>
      <div className="icons">
        <div>
          <ForumIcon />
        </div>
        <div className="cart
        ">
          <ShoppingCartIcon />
        </div>
        <div>
          <NotificationsIcon />
        </div>
      </div>
      <div className="login">
        <h3>LOGIN</h3>
      </div>
    </div>
  );
};

export default Navbar;
