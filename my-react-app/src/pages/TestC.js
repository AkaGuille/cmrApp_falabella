import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { FaUserAlt } from "react-icons/fa";
import { Typography } from "@mui/material";
import earp from "../img/earp.png";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Category from "../Components/Category";
import ThumbnailSection from "../Components/ThumbnailSection";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function TestC() {
  return (
    <div>
    <Grid
      container
      item
      spacing={2}
      justify="space-between"
      alignItems="center"
      sx={{ width: "100%", mt: "2rem" }}
    >
      <IconButton color="primary">
        <FaUserAlt size={40} style={{ color: "white", marginLeft: "3rem" }} />
      </IconButton>
    </Grid>
    <Box>
      <Img alt="complex" src={earp} width="550" sx={{mt: "2rem"}} />
    </Box>
    <div className="categories-container" style={{ marginTop: '2rem' }}>
      <div className="category-wrapper">
        <Category icon="🍔" label="Comida" />
        <Category icon="📚" label="Libros" />
        <Category icon="🎬" label="Películas" />
        <Category icon="🎮" label="Videojuegos" />
        <Category icon="🛒" label="Compras" />
        <Category icon="🌟" label="Otros" />
      </div>
    </div>
    <ThumbnailSection></ThumbnailSection>
    <ThumbnailSection></ThumbnailSection>
  </div>
  );
}
