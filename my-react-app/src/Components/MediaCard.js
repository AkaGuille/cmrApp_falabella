import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


export default function MediaCard() {
  const iconStyle = {
    color: "#007933", // Set the desired color here
  };

  const iconStyleSecondary = {
    color: "#56AF31", // Set the desired color here
  };

  return (
    <Card
      sx={{
        width: 520,
        height: 200,
        backgroundColor: "white",
        borderRadius: 5,
        margin: "auto",
        boxShadow: "none",
        border: "none",
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        mt: "2rem"
      }}
    >
      <CardContent>
        <Grid container>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                  style={iconStyle}
                >
                  Tienda CMR
                </Typography>
              </Grid>
              <Grid item sx={{ ml: "1rem" }}>
                <FaShoppingCart size={24} style={iconStyle} />
              </Grid>
            </Grid>
            <Typography
              variant="h5"
              sx={{ color: "#56AF31", fontWeight: "medium" }}
            >
              Pago de producto individual
            </Typography>
            <Typography variant="h6" sx={{ color: "#ABD798" }}>
              4511 5626 5358 9593
            </Typography>
          </Grid>
          <Grid item>
            <Grid sx={{ml: "6rem"}}
              container
              alignItems="center"
              justifyContent="center"
              style={{ height: "100%" }}
            >
              <FaAngleRight size={50} style={iconStyleSecondary} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
