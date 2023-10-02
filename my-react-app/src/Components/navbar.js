import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import Grid from '@mui/material/Grid';
import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Navbar() {

  const [value, setValue] = React.useState(0);
  

  return(
    <Grid container spacing={2} justify='center' alignItems="center" direction="column" sx={{minWidth: 300, mt: '4rem'}}>
      <nav className="nav">
      <ul>                    
        <CustomLink to={"/"}>Home</CustomLink>
        <CustomLink to={"/social"}>Social</CustomLink>
        <CustomLink to={"/TestC"}>TestC</CustomLink>
      </ul>
    </nav>

    <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Grid>
  )
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end:true})
  return(
    <li className={isActive ? "active": ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}