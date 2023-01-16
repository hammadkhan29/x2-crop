import React, { useState } from "react";
import styled from "styled-components";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../assets/50x50logo.png"
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { ListItem, ListItemButton } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";

export default function MainNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifcations, setshowNotifications] = useState(false);

  const navigate = useNavigate();
  const [{open, user}, dispatch] = useStateValue();
  


  const Container = styled("div")(() => ({
    display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "62px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
        padding: "0px 20px",
        top: "0px",
        left: "0px",
        width: "100%",
        zIndex: 100,
        position: "sticky",
  }));

  const RightHeader = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
  }));

  const Icon = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  }));

  const IconWithText = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    margin: "0px 20px",
    
    cursor: "pointer",
  }));

  const Menu = styled("div")(() => ({
    position: "absolute",
    bottom: "-70px",
    right: "30px",
    background: "#FFFFFF",
    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
  }));

  const MenuTile = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    padding: "10px 30px",
    cursor: "pointer",
  }));

  const handleClose = () => {
    setShowMenu(false)
  };
  console.log(showMenu)

  const handleLogout = () => {
    if(user) {
        auth.signOut()
        localStorage.removeItem('User')
        navigate('/')
    }

}


  return (
    <Container>
      <img style={{marginLeft:'60px'}} width={50} height={50} src={Logo} alt="Voltox Logo" />
      <RightHeader>
        <IconWithText onClick={() => setShowMenu(!showMenu)}>
          <PersonIcon style={{ fontSize:22,marginRight: "5px" }} />
          Admin
        </IconWithText>
      </RightHeader>
      {/* {showMenu ? ( */}
          {/* <MenuTile onClick={handleLogout}>
            <LogoutIcon style={{ marginRight: "5px" }} />
            Logout
          </MenuTile> */}
          {/* < */}
          <Menu
        open={true}
        onClose={handleClose}
            >
            {
                showMenu &&
                <>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
            }
        
      </Menu>
      {/* ) : null} */}
    </Container>
  );
}