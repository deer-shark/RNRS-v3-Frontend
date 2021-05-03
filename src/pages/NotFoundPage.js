import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NotFoundPage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={3} justify={'center'}>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4" component="h2">
              404 Page Not Found
            </Typography>
            <Typography variant="body" component="p">
              請你離開！
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}