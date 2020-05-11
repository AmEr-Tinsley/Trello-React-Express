import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Card,CardActionArea,CardMedia,CardContent,Typography } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import jwt_decode from 'jwt-decode'
import history from '../history';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(12),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      paddingTop: '35.25%',

    },
    Cardroot: {
        maxWidth: 345,
      },
      media: {
        height: 100,
        paddingTop: '70.25%',
      },
  }));
function Home(props){
    const classes = useStyles();
   

    function displayprojects(){
        history.push('/projects');
    }
    function displaylearningsection(){
        history.push('/learn');
    }
    return (
        <Zoom in = {true}>
        
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.paper} onClick={displayprojects}>
                        <Card className={classes.Cardroot}>
                            <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require('../images/projects.jpg')}
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Projects
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Organize and prioritize your projects in a fun, flexible, and rewarding way!
                            </Typography>
                        </CardContent> 
                        </CardActionArea>
                        </Card>
                    
                        </div>
                    </Grid>
                
                    <Grid item xs={12} sm={6}>
                        <div className={classes.paper} onClick={displaylearningsection}>
                        <Card className={classes.Cardroot}>
                            <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={require('../images/learn.jpg')}
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Learn
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Learn different tips , tricks and concepts of programming!
                            </Typography>
                        </CardContent> 
                        </CardActionArea>
                        </Card>
                    
                        </div>
                    </Grid>
                    </Grid>
                </div>
            </Zoom>
    );
}

export default Home