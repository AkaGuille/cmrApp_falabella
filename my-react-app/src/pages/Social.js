import { Margin } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import CardRank from "../Components/CardRank";
import profilePic1 from "../img/profilePic1.jpg";
import card1 from "../img/Card1.png";
import Paper from "@mui/material/Paper";
import socialBanner from "../img/socialBanner.png";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import cmrFalla from "../img/cmrFalla.png";
import IconButton from "@mui/material/IconButton";
import { FaUserAlt } from "react-icons/fa";
import crmFallaWhite from "../img/crmFallaWhite.png";
import profilePic2 from "../img/profilePic2.png";
import card2 from "../img/card2.png";

const cardData = {
  name: "Andres López",
  points: "10.344 CMR",
  planImagePath: card1,
  profileImagePath: profilePic1,
};

const cardData2 = {
  name: "Luisa Escarmiento",
  points: "12.208 CMR",
  planImagePath: card2,
  profileImagePath: profilePic2,
};

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const GreenTextTypo = styled(Typography)({
  color: "#56AF31",
});

export default function Logger() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        direction="column"
        sx={{ minWidth: 300, mt: "2rem" }}
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
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Social
              </Typography>
              <Typography
                variant="h6"
                className="poppins-font"
                sx={{ fontWeight: "regular", color: "#56AF31" }}
              >
                Ranking
              </Typography>
            </Grid>
          </Grid>

          <Grid item sx={{ flex: 1, textAlign: "right" }}>
            <Typography variant="h6">c</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          mt: "4rem",
          maxWidth: 742,
          flexGrow: 1,
          boxShadow: "none",
          border: "none",
          outline: "none",
          backgroundColor: "transparent"
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="column"
            spacing={2}
            sx={{ alignItems: "center" }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", // Centrar verticalmente
                height: "100%",
                 // Establecer una altura para que funcione el centrado vertical
              }}
            >
              <Grid item>
                <Img alt="complex" src={crmFallaWhite} width="100"></Img>
              </Grid>
              <Grid item>
                <GreenTextTypo
                  variant="subtitle1"
                  sx={{ fontSize: "18px", color: "white"}}
                >
                  + Puntos = + Beneficios
                </GreenTextTypo>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="column"
            spacing={2}
            sx={{ alignItems: "center" }}
          >
            <Img alt="complex" src={socialBanner} />
          </Grid>
        </Grid>
        <Grid>
          <GreenTextTypo sx={{ fontSize: "22px", mt: "2rem", color: "white", ml: "1rem"}}>
            Tus contactos en la app:
          </GreenTextTypo>
        </Grid>
      </Paper>
      <CardRank cardData={cardData}></CardRank>
      <Divider />
      <CardRank cardData={cardData2}></CardRank>
      <Divider />
      <CardRank cardData={cardData}></CardRank>
    </div>
  );
}
