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

const cardData = {
  name: "Andres López",
  points: "10.344 CMR",
  planImagePath: card1,
  profileImagePath: profilePic1,
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
        sx={{ minWidth: 300, mt: "4rem" }}
      >
        <h1 style={{ margin: 0, color: "#007933", fontWeight: "bold " }}>
          Social
        </h1>
        <h3
          style={{
            margin: 0,
            color: "#56AF31",
            fontSize: "24px",
            fontWeight: "normal",
          }}
        >
          Ranking
        </h3>
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
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
                height: "100%", // Establecer una altura para que funcione el centrado vertical
              }}
            >
              <Grid item>
                <Img alt="complex" src={cmrFalla}></Img>
              </Grid>
              <Grid item>
                <GreenTextTypo variant="subtitle1" color="text.secondary" sx={{fontSize: "18px"}}>
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
          <GreenTextTypo sx={{ fontSize: "22px", mt: "2rem" }}>
            Tus contactos en la app:
          </GreenTextTypo>
        </Grid>
      </Paper>
      <CardRank cardData={cardData}></CardRank>
      <Divider />
      <CardRank cardData={cardData}></CardRank>
      <Divider />
      <CardRank cardData={cardData}></CardRank>
    </div>
  );
}
