import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const drawerWidth = 280;


const styles = {
  container: {
    marginLeft: "10px",
    marginTop: "10px",
    borderRadius: "50px",
    marginBottom: "10px",
    backgroundColor: "#6973FE",
    height: "100%",
    position: "relative",
  },
  bottomIcons: {
    position: "absolute",
    bottom: "10px",
    width: "100%",
  },
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    backgroundColor: "transparent",
    boxShadow: "none",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const ResponsiveDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: "#6973FE",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  },
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    zIndex: 1,
    ...(open && {
      width: "100%",
    }),
    ...(!open && {
      width: "0",
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      backgroundColor: "#6973FE",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      ...(open && {
        width: drawerWidth,
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
      ...(!open && {
        width: 0,
      }),
    },
  },
}));


export default function ActiveRecruiter() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
     
      <ResponsiveDrawer variant="permanent">
        <List
          sx={{
            width: "auto",
            height: "auto",
            marginLeft: "10px",
            marginTop: "10px",
            borderRadius: "50px",
            marginBottom: "10px",
            backgroundColor: "#6973FE",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List sx={{ height: "100%" }}>
            {["Grid", "Search"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "flex" }}>
                <ListItemButton
                  sx={{
                    minHeight: 50,
                    justifyContent: open ? "initial" : "center",
                    px: 1.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "white",
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      <AutoAwesomeMosaicOutlinedIcon
                        sx={{ fontSize: "30px" }}
                      />
                    ) : (
                      <FindInPageOutlinedIcon sx={{ fontSize: "30px" }} />
                    )}
                  </ListItemIcon>

                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}

            {["Grid", "Search"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block", color: "#7797FE" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 50,
                    justifyContent: open ? "initial" : "center",
                    px: 1.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "white",
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      <AccountBoxOutlinedIcon sx={{ fontSize: "30px" }} />
                    ) : (
                      <BusinessCenterOutlinedIcon sx={{ fontSize: "30px" }} />
                    )}
                  </ListItemIcon>

                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
            <div sx={styles.bottomIcons}>
              {["Home", "Log Out"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 60,
                      justifyContent: open ? "initial" : "center",
                      px: 1.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? (
                        <HomeOutlinedIcon
                          sx={{ marginTop: "220px", fontSize: "30px" }}
                        />
                      ) : (
                        <LogoutOutlinedIcon sx={{ fontSize: "30px" }} />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </div>
          </List>
        </List>
      </ResponsiveDrawer>
    </Box>
  );
}
