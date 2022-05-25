import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Container, Typography, CardActionArea, Avatar, Stack } from '@mui/material';
import { display, fontSize } from '@mui/system';

export default function AppLiveMatch() {
    return (<>

        <Card
            sx={{
                py: 5,
                boxShadow: 0,
                textAlign: 'center',


            }}
            justifyContent={"center"}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image="/static/mock-images/Matchs/MatchLive1.png"
                    alt="green iguana"
                />
                <CardContent style={{ padding: 5 }} >
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent={"space-between"}>
                        <Grid item xs={6}  >

                           <Typography gutterBottom variant="h7" style={{ display: 'flex' }} component="span">
                                <Avatar alt="Remy Sharp" m={0} src="https://mui.com/static/images/avatar/1.jpg" />
                                <Typography gutterBottom component="h8" style={{
                                    fontWeight: '600', fontSize: '15px', display: 'flex',
                                    'flex-direction': 'column'
                                }} ml={0.5} >
                                    Lizad
                                    <Typography style={{ fontSize: '12px' }} component="h12">{" Attacker"}</Typography>
                                </Typography>

                            </Typography>
                           

                        </Grid>
                        <Grid item xs={6}  >

                            <Typography gutterBottom variant="h7" style={{ display: 'flex' }} component="span">
                                <Avatar alt="Remy Sharp" m={0} src="https://mui.com/static/images/avatar/1.jpg" />
                                <Typography gutterBottom component="h8" style={{
                                    fontWeight: '600', fontSize: '15px', display: 'flex',
                                    'flex-direction': 'column'
                                }} ml={0.5} >
                                    Lizad
                                    <Typography style={{ fontSize: '12px' }} component="h12">{" Attacker"}</Typography>
                                </Typography>

                            </Typography>

                        </Grid>

                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>


    </>
    );
}
