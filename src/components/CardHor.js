import React from 'react'
import { Grid, Typography,Slider } from '@mui/material'

const CardHor = ({ content, img, title, width, height }) => {
    return (
        <Grid container width={width} height={'fit-content'} justifyContent={"flex-start"} >
            <Grid item sm={4} md={4} style={{height:'fit-content'}} padding={1}>
                <Grid container justifyContent={"center"} style={{height:'fit-content'}}  id="fitcontent">
                    <img src={img} alt="img" style={{borderRadius:'5px'}}/>
                </Grid>
            </Grid>
            <Grid item sm={6} md={6} alignItems={'center'} direction='row' style={{display:'flex'}} >
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