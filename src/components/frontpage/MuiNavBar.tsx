import * as React from 'react';
import { useState } from 'react';
import { CSSProperties } from '@mui/material/styles/createTypography';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Typography, AppBar, Toolbar, Button, Stack, Switch,Box,Drawer,IconButton } from '@mui/material';
import { ScrollReveal } from "reveal-on-scroll-react";

interface Props {
  toggleProp3?: () => void;
}

export const MuiNavBar: React.FC<Props> = ({toggleProp3 }) => {
  const [isDrawOpen,setIsDrawOpen] = useState(false)
  
  const toggleNavButtonstyles: CSSProperties = {
    display: 'block', // default display value
    
  };
  const Navstyles: CSSProperties = {
   
  };
  
  
  return (
    <AppBar position="static" sx={{ backgroundColor: '  ', boxShadow: 'none' }}>
      <Toolbar>
      <ScrollReveal.div className="center"> 
            <ScrollReveal.h1 animation="fade-in" className="color-blue">{logo}</ScrollReveal.h1>
        </ScrollReveal.div>
        
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
        <IconButton aria-label="logo"  size='medium' color='primary' edge='end' 
        sx={{ backgroundColor:'lightskyblue',
            '@media screen and (min-width: 600px)': {
              display: 'none',
            },}} onClick={() => setIsDrawOpen(true)}>
            <MenuIcon />
        </IconButton>
        
        <Stack direction="row" spacing={2} sx={{ '@media screen and (max-width: 600px)': { display: 'none',}}}>
      <Switch icon={<NightsStayIcon />} checkedIcon={<WbSunnyIcon />}  sx={{
        '@media screen  and (max-width: 600px)': {
          display: 'none',
        },
        '@media screen  and (min-width: 900px)': {
          display: 'none',
        }
      }} onChange={toggleProp3} />
      <Stack className="toggleWrapper" 
       sx={{
        '@media screen and (max-width: 900px)': {
          display: 'none',},
          display:'flex',
          alightItems:'center'
        
      }}
      onChange={toggleProp3}>
        
        <ScrollReveal.div className="center"> 
            <ScrollReveal.h1 animation="slide-in-left" className="color-blue">
            <input type="checkbox" className="dn" id="dn" />
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
            </ScrollReveal.h1>
        </ScrollReveal.div>
      </Stack>
       <ScrollReveal.div className="center" > 
                            <ScrollReveal.h1 animation="fade-in" className="color-blue">
                            <Button
            sx={{ '&:hover': { backgroundColor: '#65E4A3', color: 'white' ,} }}
            color="inherit"

          >
            Product
          </Button>
                                </ScrollReveal.h1>  
                            </ScrollReveal.div>
          
           <ScrollReveal.div className="center" > 
                            <ScrollReveal.h1 animation="fade-in" className="color-blue">
                            <Button
            sx={{ '&:hover': { backgroundColor: '#65E4A3', color: 'white' ,} }}
            color="inherit"

          >
            Services
          </Button>
                                </ScrollReveal.h1>  
                            </ScrollReveal.div>
          
           <ScrollReveal.div className="center" > 
                            <ScrollReveal.h1 animation="fade-in" className="color-blue">
                            <Button
            sx={{ '&:hover': { backgroundColor: '#65E4A3', color: 'white' ,} }}
            color="inherit"

          >
            About
          </Button>
                                </ScrollReveal.h1>  
                            </ScrollReveal.div>
          
                            <ScrollReveal.div className="center" > 
                            <ScrollReveal.h1 animation="fade-in" className="color-blue">
          <Button
            variant="contained"
            sx={{
              borderRadius: 25,
              '&:hover': { backgroundColor: '#65E4A3', color: 'white' },
              color: 'primary.main',
              backgroundColor: 'white',
            }}
            size="medium"
          >
            Log in
          </Button>
                                </ScrollReveal.h1>  
                            </ScrollReveal.div>
        </Stack>
        <Drawer anchor="left"
        open={isDrawOpen}
        onClose={() => setIsDrawOpen(false)}>
             <Stack direction="column" display='flex' alignItems='center' spacing={2} sx={{
              width:'300px'
             }}>
<div className="toggleWrapper" onChange={toggleProp3}>
        <input type="checkbox" className="dn" id="dn" />
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
          <Button
            sx={{ '&:hover': { backgroundColor: '#65E4A3', color: 'white' ,width:'100%'} }}
            color="inherit"

          >
            Product
          </Button>
          <Button
            sx={{ '&:hover': { backgroundColor: '#65E4A3', color: 'white' ,width:'100%'} }}
            color="inherit"

          >
            Services
          </Button>
          <Button
            sx={{ '&:hover': { backgroundColor: '#65E4A3', color: 'white' ,width:'100%'} }}
            color="inherit"

          >
            About
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 25,
              '&:hover': { backgroundColor: '#65E4A3', color: 'white' },
              color: 'primary.main',
              backgroundColor: 'secondary.main',
            }}
            size="medium"
          >
            Log in
          </Button>
        </Stack>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavBar;


const logo = (
    <svg width="163" height="42" viewBox="0 0 163 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.2023 38V6.86H52.5502C54.655 6.86 56.3778 7.28529 57.7186 8.13587C59.0737 8.97204 60.0757 10.0461 60.7244 11.358C61.3876 12.6699 61.7192 14.0251 61.7192 15.4235C61.7192 17.1391 61.3083 18.5952 60.4866 19.7917C59.6792 20.9883 58.5763 21.7957 57.1779 22.2137V21.1325C59.1386 21.5794 60.6235 22.5093 61.6327 23.9221C62.6563 25.335 63.1681 26.9424 63.1681 28.7445C63.1681 30.5898 62.8148 32.2045 62.1084 33.5885C61.402 34.9725 60.3496 36.0537 58.9512 36.8322C57.5672 37.6107 55.8516 38 53.8044 38H40.2023ZM45.4788 33.0911H53.1557C54.0639 33.0911 54.8785 32.9109 55.5993 32.5505C56.3201 32.1757 56.8824 31.6567 57.2861 30.9935C57.7041 30.3159 57.9132 29.5158 57.9132 28.5931C57.9132 27.757 57.733 27.0073 57.3726 26.3441C57.0121 25.681 56.4859 25.1547 55.7939 24.7655C55.1019 24.3618 54.273 24.16 53.3071 24.16H45.4788V33.0911ZM45.4788 19.2944H52.4853C53.235 19.2944 53.9053 19.1502 54.4964 18.8619C55.0875 18.5735 55.5561 18.1482 55.9021 17.586C56.2481 17.0237 56.4211 16.3317 56.4211 15.51C56.4211 14.4287 56.0751 13.5277 55.3831 12.8069C54.6911 12.086 53.7251 11.7256 52.4853 11.7256H45.4788V19.2944ZM77.8021 38.6488C75.4666 38.6488 73.4266 38.1225 71.6822 37.0701C69.9378 36.0177 68.5826 34.5688 67.6167 32.7235C66.6652 30.8637 66.1895 28.7301 66.1895 26.3225C66.1895 23.8717 66.6796 21.7236 67.66 19.8782C68.6403 18.0329 70.0027 16.5912 71.7471 15.5532C73.4915 14.5152 75.5098 13.9962 77.8021 13.9962C80.152 13.9962 82.1992 14.5225 83.9436 15.5749C85.688 16.6273 87.0432 18.0834 88.0091 19.9431C88.975 21.7885 89.458 23.9149 89.458 26.3225C89.458 28.7445 88.9678 30.8854 87.9875 32.7451C87.0216 34.5905 85.6664 36.0393 83.922 37.0917C82.1776 38.1297 80.1376 38.6488 77.8021 38.6488ZM77.8021 33.7615C79.8781 33.7615 81.4207 33.0695 82.4298 31.6855C83.439 30.3015 83.9436 28.5138 83.9436 26.3225C83.9436 24.0591 83.4318 22.257 82.4082 20.9162C81.3846 19.5611 79.8493 18.8835 77.8021 18.8835C76.4037 18.8835 75.2503 19.2007 74.3421 19.835C73.4483 20.4549 72.7851 21.3271 72.3526 22.4516C71.9201 23.5617 71.7038 24.852 71.7038 26.3225C71.7038 28.5859 72.2156 30.3952 73.2392 31.7504C74.2772 33.0911 75.7982 33.7615 77.8021 33.7615ZM94.6551 38V6.21125H99.8667V38H94.6551ZM115.708 38.6488C113.56 38.6488 111.686 38.1081 110.086 37.0269C108.485 35.9456 107.245 34.4751 106.366 32.6154C105.487 30.7556 105.047 28.658 105.047 26.3225C105.047 23.9582 105.487 21.8533 106.366 20.008C107.26 18.1482 108.521 16.685 110.15 15.6181C111.779 14.5369 113.697 13.9962 115.903 13.9962C118.123 13.9962 119.983 14.5369 121.482 15.6181C122.996 16.685 124.142 18.1482 124.92 20.008C125.699 21.8677 126.088 23.9726 126.088 26.3225C126.088 28.6436 125.699 30.7412 124.92 32.6154C124.142 34.4751 122.981 35.9456 121.439 37.0269C119.896 38.1081 117.986 38.6488 115.708 38.6488ZM116.508 33.9777C117.907 33.9777 119.031 33.6606 119.882 33.0262C120.747 32.3775 121.374 31.4765 121.763 30.3231C122.167 29.1698 122.369 27.8362 122.369 26.3225C122.369 24.7943 122.167 23.4608 121.763 22.3219C121.374 21.1685 120.761 20.2747 119.925 19.6404C119.089 18.9916 118.007 18.6672 116.681 18.6672C115.283 18.6672 114.129 19.0132 113.221 19.7052C112.313 20.3828 111.643 21.3055 111.21 22.4732C110.778 23.6266 110.561 24.9097 110.561 26.3225C110.561 27.7497 110.77 29.0472 111.188 30.215C111.621 31.3683 112.277 32.2838 113.156 32.9614C114.036 33.639 115.153 33.9777 116.508 33.9777ZM122.369 38V21.6082H121.72V6.86H126.975V38H122.369ZM143.353 38.6488C141.017 38.6488 138.977 38.1225 137.233 37.0701C135.489 36.0177 134.133 34.5688 133.168 32.7235C132.216 30.8637 131.74 28.7301 131.74 26.3225C131.74 23.8717 132.23 21.7236 133.211 19.8782C134.191 18.0329 135.553 16.5912 137.298 15.5532C139.042 14.5152 141.061 13.9962 143.353 13.9962C145.703 13.9962 147.75 14.5225 149.494 15.5749C151.239 16.6273 152.594 18.0834 153.56 19.9431C154.526 21.7885 155.009 23.9149 155.009 26.3225C155.009 28.7445 154.519 30.8854 153.538 32.7451C152.572 34.5905 151.217 36.0393 149.473 37.0917C147.728 38.1297 145.688 38.6488 143.353 38.6488ZM143.353 33.7615C145.429 33.7615 146.971 33.0695 147.981 31.6855C148.99 30.3015 149.494 28.5138 149.494 26.3225C149.494 24.0591 148.983 22.257 147.959 20.9162C146.935 19.5611 145.4 18.8835 143.353 18.8835C141.954 18.8835 140.801 19.2007 139.893 19.835C138.999 20.4549 138.336 21.3271 137.903 22.4516C137.471 23.5617 137.255 24.852 137.255 26.3225C137.255 28.5859 137.766 30.3952 138.79 31.7504C139.828 33.0911 141.349 33.7615 143.353 33.7615Z" fill="white"/>
<path d="M0 21H17.0678C21.9511 21 25.9099 24.9587 25.9099 29.8421C25.9099 34.7255 21.9511 38.6842 17.0678 38.6842H0V21Z" fill="#65E4A3"/>
<path d="M0 5.52637H11.3927C15.0552 5.52637 18.0243 8.49543 18.0243 12.1579C18.0243 15.8205 15.0552 18.7895 11.3927 18.7895H0V5.52637Z" fill="#65E4A3"/>
</svg>
)