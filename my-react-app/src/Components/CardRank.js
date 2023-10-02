import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const GreenTextTypo = styled(Typography)({
  color: '#56AF31'
});


export default function CardRank({ cardData }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
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
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src={cardData.profileImagePath} style={{ borderRadius: "50%" }} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
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
              item
              xs={12}
              sm={12}
              sx={{
                mt: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align left vertically
              }}
            >
              <Typography gutterBottom variant="h6" component="div">
                {cardData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {cardData.points}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GreenTextTypo variant="subtitle1" component="div">
              Plan:
            </GreenTextTypo>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img alt="complex" src={cardData.planImagePath} sx={{mr: "4rem"}}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
