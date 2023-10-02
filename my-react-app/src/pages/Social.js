
import { Margin } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import CardRank from '../Components/CardRank';
import profilePic1 from "../img/profilePic1.jpg";
import card1 from "../img/Card1.png"

const cardData = {
  name: "Andres López",
  points: "10.344 CMR",
  planImagePath: card1,
  profileImagePath: profilePic1
};

export default function Logger(){
  return(
    <div>
      <Grid container spacing={2} justify='center' alignItems="center" direction="column" sx={{minWidth: 300, mt: '4rem'}}>
      <h1 style={{margin: 0, color:"#007933", fontWeight: 'bold '}}>Social</h1>
      <h3 style={{margin: 0, color:"#56AF31", fontSize: "20px", fontWeight: 'normal'}}>Ranking</h3>
      </Grid>
      <CardRank cardData={cardData}></CardRank>
    </div>
  )
}