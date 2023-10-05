import { Link, useMatch, useNavigate, useResolvedPath, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
/*import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';*/
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const fontStyles = { fontSize: "200px" };
const labelStyles = { color: "white" };

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      direction="column"
      sx={{ minWidth: 300, mt: "4rem" }}
    >
      <BottomNavigation
        sx={{ width: "75%", position: "absolute", bottom: 0, backgroundColor: "transparent", // Fondo transparente
        position: "fixed", // Posición fija en la parte inferior
        bottom: 0,}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          onClick={() => navigate("/")}
          style={fontStyles}
          icon={<FaHome style={{ ...fontStyles, color: value === "/" ? 'green' : 'white' }} />}
          sx={labelStyles}
        />
        <BottomNavigationAction
          label="Social"
          onClick={() => navigate("/social ")}
          style={fontStyles}
          icon={<FaUserFriends style={{ ...fontStyles, color: value === "/social" ? 'green' : 'white' }} />}
          sx={labelStyles}
        />
        <BottomNavigationAction
          label="Shop"
          onClick={() => navigate("/testC")}
          style={fontStyles}
          icon={<FaShoppingCart style={{ ...fontStyles, color: value === "/testC" ? 'green' : 'white' }} />}
          sx={labelStyles}
        />
      </BottomNavigation>
    </Grid>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
