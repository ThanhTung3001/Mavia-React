import React from 'react'
import { Grid, Typography,Slider } from '@mui/material'

const CardHor = ({ content, img, title, width, height }) => {
    return (
        <Grid container width={width} height={'fit-content'} justifyContent={"center"}>
            <Grid item xs={4} style={{height:'fit-content'}}>
                <Grid container justifyContent={"center"} style={{height:'fit-content'}} spacing={1} id="fitcontent">
                    <img src={img} alt="img" style={{borderRadius:'5px'}}/>
                </Grid>
            </Grid>
            <Grid item xs={8} >
                <Grid container padding={"0 10px 0 10px"} justifyContent={"start"} spaceing={1} sx={{ flexDirection: 'column' }}>
                    <Typography component='h5' variant='h7'>
                        {title}
                    </Typography>
                    <Typography variant="body2" >
                        {content}
                    </Typography>
                    <Slider
                    aria-label="Level"
                    defaultValue={40}
                    getAriaValueText={""}
                   
                    color="primary"
                    />
                </Grid>
            </Grid>
        </Grid>

    )
}
export default CardHor;