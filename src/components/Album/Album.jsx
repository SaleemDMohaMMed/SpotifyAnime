
// Here use Materil-UI to import a some modules 
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


// style for the container
const Item = styled(Paper)(({ theme }) => ({
  // Function used to style paper component
  // here used ternory operator
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing(props) {
  return (
    <Box sx={{ width: '100%' }}>
      {/* here to describe each row and colunm */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* spacing prop is used to control the spacing between rows and colunms */}
        <Grid item xs={12}> {/* here making it clear where each row start to ends */}
          {/* First Item */}
          <Item>
            <img style={{ height: '100%', width: '100%' }} src='../img/img1.jpg' alt='' />
            <div onClick={() => props.setsong('song2.mp3')}>
              <PlayCircleFilledWhiteIcon style={{ color: 'pink' }} />
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          {/* Second Item */}
          <Item>
            <img style={{ height: '34%', width: '60%' }} src='./img/img2.jpg' alt='' />
            <div onClick={() => props.setsong('song1.mp3')}>
              <PlayCircleFilledWhiteIcon style={{ color: 'violet' }} />
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          {/* third Item */}
          <Item>
            <img style={{ height: '34%', width: '60%' }} src='../img/img2.jpg' alt='' />
            <div onClick={() => props.setsong('song3.mp3')}>
              <PlayCircleFilledWhiteIcon style={{ color: 'red' }} />
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          {/* Fourth Item */}
          <Item>
            <img style={{ height: '100%', width: '100%' }} src='../img/img1.jpg' alt='' />
            <div onClick={() => props.setsong('song4.mp3')}>
              <PlayCircleFilledWhiteIcon style={{ color: 'seagreen' }} />
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          {/* firth Item */}
          <Item><img style={{ height: '100%', width: '100%' }} src='../img/img5.jpg' alt='' /></Item>
          <div onClick={() => props.setsong('song5.mp3')}>
            <PlayCircleFilledWhiteIcon style={{ color: 'orange' }} />
          </div>
        </Grid>
        <Grid item xs={4}>
          {/* sixth Item */}
          <Item><img style={{ height: '100%', width: '100%' }} src='./img/img4.jpg' alt='' /></Item>
          <div onClick={() => props.setsong('song6.mp3')}>
            <PlayCircleFilledWhiteIcon style={{ color: 'blue' }} />
          </div>
        </Grid>
        <Grid item xs={4}>
          {/* seventh item */}
          <Item><img style={{ height: '100%', width: '100%' }} src='./img/img2.jpg' alt='' /></Item>
          <div onClick={() => props.setsong('song7.mp3')}>
            <PlayCircleFilledWhiteIcon style={{ color: 'orange' }} />
          </div>
        </Grid>
        <Grid item xs={4}>
          {/* eigth item */}
          <Item><img style={{ height: '38.4rem', width: '100%' }} src='./img/img3.jpg' alt='' /></Item>
          <div onClick={() => props.setsong('song5.mp3')}>
            <PlayCircleFilledWhiteIcon style={{ color: 'green' }} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}