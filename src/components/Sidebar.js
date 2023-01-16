import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import TopicIcon from "@mui/icons-material/Topic";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Badge from "@mui/material/Badge";
import { Box } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Sidebar() {
  const location = useLocation();
  const [snack, setSnack] = useState(false);


  const [notifyCount, setNotifyCount] = useState(0);


  const Container = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // postion:'sticky',
    // top:0,
    alignItems: "center",
    width: "55px",
    background: "#FFFFFF",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(120px)",
    // height: "calc(100vh - 62px)",
    height:'100vh',
    position:'sticky',
    top: 56,
    left: '500',

    "@media (max-width: 700px)": {
      width: "40px",
    },
  }));

  const Icon = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
     marginTop: 20,
  }));

  const checkManage= true;

  return (
    <>
      <Container>
        <Icon>
        
          {checkManage == false ? (
            <HomeIcon
              sx={{
                fontSize: "30px",
                color: location.pathname === "/" ? "green" : "#6F6F6F",
                "@media (max-width: 700px)": {
                  fontSize: "20px",
                },
              }}
            />
          ) : (
            <Link to={"/dashboard"}>
              <HomeIcon
                sx={{
                  fontSize: 25,
                  color: location.pathname === "/dashboard" ? "green" : "#6F6F6F",
                  "@media (max-width: 700px)": {
                    fontSize: 20,
                  },
                }}
              />
            </Link>
          )}
        </Icon>
        <Icon>
          <Link to={"/locations"}>
            <LocationOnIcon
              sx={{
                fontSize: 25,
                color: location.pathname === "/locations" ? "green" : "#6F6F6F",
                "@media (max-width: 700px)": {
                  fontSize: 20,
                },
              }}
            />
          </Link>
        </Icon>
        <Icon>
          {/* <Link to={"/users"}> */}
            <SupervisedUserCircleIcon
              sx={{
                fontSize: 25,
                color: location.pathname === "/users" ? "green" : "#6F6F6F",
                "@media (max-width: 700px)": {
                  fontSize: 20,
                },
              }}
            />
          {/* </Link> */}
        </Icon>
        <Icon>
          {/* <Link to={"/services"}> */}
            <EqualizerIcon
              sx={{
                fontSize: 25,
                color:
                  location.pathname === "/services" ? "green" : "#6F6F6F",
                "@media (max-width: 700px)": {
                  fontSize: 20,
                },
              }}
            />
          {/* </Link> */}
        </Icon>
        <Icon>
          <Link to={"/blogs"}>
            <TopicIcon
              sx={{
                fontSize: 25,
                color: location.pathname?.includes("/blogs")
                  ? "green"
                  : "#6F6F6F",
                "@media (max-width: 700px)": {
                  fontSize: 20,
                },
              }}
            />
          </Link>
        </Icon>


        <Icon  style={{ marginTop: "auto", marginBottom: "55px" }}>
          <HelpRoundedIcon
            sx={{
              fontSize: 25,
              color: location.pathname === "/faq" ? "green" : "#6F6F6F",
              "@media (max-width: 700px)": {
                fontSize: 20,
                marginTop: "30px",
              },
            }}
          />
        </Icon>
      </Container>
    </>
  );
}
