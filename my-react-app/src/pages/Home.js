import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { spacing } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lime, green } from "@mui/material/colors";
import BancoFalabella from "../img/BancoFalabella.png";
import CMRFalabella from "../img/CMRFalabella.png";
/*
import PaymentsIcon from "@mui/icons-material/Payments";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
*/
import bgHome from "../img/bgHome.png";
import { FaUserAlt } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { FaScrewdriver } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import MediaCard from "../Components/MediaCard";

const themeFalabella = createTheme({
  palette: {
    primary: {
      main: "#007933",
      light: "#1DB51A",
      dark: "#045835",
    },
    secondary: {
      main: "#C2D402",
      light: "#EBEF20",
      dark: "#7DB409",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={themeFalabella}>
      <div>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          direction="column"
          sx={{ minWidth: 300, mt: "1rem" }}
        >
          <Grid
            container
            item
            spacing={2}
            justify="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Grid
              item
              sx={{ flex: 1, textAlign: "left", ml: "2rem", mr: "-2rem" }}
            >
              <IconButton color="primary">
                <FaUserAlt size={40} style={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid item sx={{ flex: 1, textAlign: "center" }}>
              <Grid>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: "regular" }}
                >
                  Tienes activo el plan:
                </Typography>
                <Typography
                  variant="h4"
                  className="poppins-font"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Estándar
                </Typography>
              </Grid>
            </Grid>

            <Grid item sx={{ flex: 1, textAlign: "right" }}>
              <Typography variant="h6">c</Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              width: 526,
              height: 328,
              backgroundColor: "#56AF31",
              borderRadius: 5,
              mt: "2rem",
              display: "flex", // Enable Flexbox
              flexDirection: "column", // Stack elements vertically
              justifyContent: "center", // Center vertically
              alignItems: "center", // Center horizontally
            }}
          >
            <img src={CMRFalabella} alt="Logo CMR" width={175}></img>
            <Typography
              variant="h4"
              sx={{ mt: "2rem", fontWeight: "bold", color: "white" }}
            >
              12.500 puntos
            </Typography>
            <Typography variant="h6" sx={{ color: "#ABD798" }}>
              3141 5926 5358 9793
            </Typography>
          </Box>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem", // Adjust the value as needed
            }}
          >
            <IconButton
              color="primary"
              style={{ color: "white", marginRight: "2rem" }}
            >
              <FaRegMoneyBillAlt fontSize="40px" />
            </IconButton>
            <IconButton
              color="primary"
              style={{ color: "white", marginRight: "2rem" }}
            >
              <FaScrewdriver style={{ fontSize: "48px" }} />
            </IconButton>
            <IconButton
              color="primary"
              style={{ color: "white", marginRight: "2rem" }}
            >
              <FaDollarSign fontSize="40px" />
            </IconButton>
            <IconButton color="primary" style={{ color: "white" }}>
              <FaEllipsisH fontSize="40px" />
            </IconButton>
          </section>

          <Typography variant="h6" sx={{fontWeight: "regular", color: "white", mt: "2rem"}}>Cantidad redimible en pesos</Typography>
          <Typography variant="h4" sx={{fontWeight: "bold", color: "white"}}>1.000.000 $</Typography>

          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
