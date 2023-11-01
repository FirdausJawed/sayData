import FolderIcon from '@mui/icons-material/Folder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HomeIcon from '@mui/icons-material/Home';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import { Box, Drawer, Hidden, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, colors } from '@mui/material';
import { images } from "./assets";
import Animate from "./Animate";
import React from 'react';


const menus = [
      {
            title: "Home",
            icon: <HomeIcon />,
            state: "Home"
      },
      {
            title: "All Files",
            icon: <FolderIcon />,
            state: "All Files"
      },
      {
            title: "saved",
            icon: <BookmarkBorderIcon />,
            state: "saved"
      },
      {
            title: "Integrations",
            icon: <ShareIcon />,
            state: "Integrations"
      },
      {
            title: "Trash",
            icon: <DeleteIcon />,
            state: "Trash"
      },
      {
            title: "Settings",
            icon: <SettingsIcon />,
            state: "Settings"
      },
      {
            title: "Help and support",
            icon: <HelpIcon />,
            state: "Help and support"
      }
];

const Sidebar = ({ sidebarWidth }) => {
      const activeState = "Home";

      const [mobileOpen, setMobileOpen] = React.useState(false);

      const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
      };

      const MenuItem = (props) => {
            return (
                  <ListItem key={props.index} disableGutters disablePadding sx={{ py: 0.5 }}>
                        <ListItemButton sx={{
                              borderRadius: "10px",
                              bgcolor: props.isActive ? colors.blue[600] : "",
                              color: props.isActive ? colors.common.white : "",
                              "&:hover": {
                                    bgcolor: props.isActive ? colors.blue[600] : "",
                                    color: props.isActive ? colors.common.white : "",
                              }
                        }}>
                              <ListItemIcon sx={{
                                    minWidth: "40px",
                                    color: props.isActive ? colors.common.white : ""
                              }}>
                                    {props.item.icon}
                              </ListItemIcon>
                              <ListItemText primary={
                                    <Typography fontWeight={600}>
                                          {props.item.title}
                                    </Typography>
                              } />
                        </ListItemButton>
                  </ListItem>
            );
      };

      const drawer = (
            <Box
                  padding={3}
                  paddingBottom={0}
                  display="flex"
                  flexDirection="column"
                  height="100vh"
                  sx={{
                        "::-webkit-scrollbar": {
                              display: "none"
                        }
                  }}
            >
                  {/* logo */}
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                        <Animate type="fade" delay={1}>
                              <img src={images.logo} alt="logo" height={70} />
                        </Animate>
                  </Box>
                  {/* logo */}

                  <Animate sx={{ flexGrow: 1 }}>
                        <Paper
                              elevation={0}
                              square
                              sx={{
                                    borderTopRightRadius: "10px",
                                    borderTopLeftRadius: "10px",
                                    p: 2,
                                    height: "100%",
                                    boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px"
                              }}
                        >
                              {/* menu group */}
                              <List>
                                    {menus.map((item, index) => (
                                          <MenuItem
                                                key={index}
                                                item={item}
                                                isActive={item.state === activeState}
                                          />
                                    ))}
                              </List>
                              {/* menu group */}
                        </Paper>
                  </Animate>
            </Box>
      );

      return (
            <div>
            <Hidden >
            <Box
                  component="nav"
                  sx={{
                        width: { md: sidebarWidth },
                        flexShrink: { md: 0 }
                  }}
            >
                  {/* large screen */}
                  <Drawer 
                        variant="permanent"
                        sx={{
                              display: { xs: "none", sm: "none", md: "block" },
                              "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: sidebarWidth,
                                    borderWidth: 0,
                                    bgcolor: "transparent",
                                    "::-webkit-scrollbar": {
                                          display: "none"
                                    }
                              }
                        }}
                        open
                  >
                        {drawer}
                  </Drawer>
                  {/* large screen */}

                  {/* Mobile view */}
                  <Hidden lgUp implementation="css">
                        <IconButton
                              color="inherit"
                              aria-label="open drawer"
                              edge="start"
                              onClick={handleDrawerToggle}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Drawer
                              variant="temporary"
                              open={mobileOpen}
                              onClose={handleDrawerToggle}
                        >
                              {/* menu group */}
                                    <List>
                                          {menus.map((item, index) => (
                                                <MenuItem
                                                      key={index}
                                                      item={item}
                                                      isActive={item.state === activeState}
                                                />
                                                ))}
                                    </List>
                              {/* menu group */}
                        </Drawer>
                   </Hidden>
                  
            </Box>
            </Hidden>
            </div>
      );
};

export default Sidebar;