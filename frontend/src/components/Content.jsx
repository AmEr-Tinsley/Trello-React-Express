import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Grid,Card,CardActionArea,CardMedia,CardContent,Typography } from '@material-ui/core';
import { red } from "@material-ui/core/colors";
import {useIslogged} from "./Header";
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
function Content(){
    const classes = useStyles();
    const [projects,Setprojects] = useState(false);
    const [learn,Setlearn] = useState(false);
    console.log(useIslogged());
    return(<div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <div className={classes.paper}>
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
                    <div className={classes.paper}>
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
            );
}

export default Content;