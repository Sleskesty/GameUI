import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteGame from './deleteGame';
import EditGame from './editGame'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
    padding: theme.spacing.unit * 2,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  
});

function MediaCard(props) {
  const { classes } = props;
  return (
      <div className={classes.root}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.GameData.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.GameData.name}
          </Typography>
          <Typography component="h4">
          Description: {props.GameData.desc}
          </Typography>
          <Typography component="p">
           Console: {props.GameData.console}
          </Typography>
          <Typography component="p">
           Category: {props.GameData.cat}
          </Typography>
          <Typography component="p">
           price bought for: {props.GameData.price}
          </Typography>
          <Typography component="p">
           Currently: {props.GameData.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          {props.stater ? <EditGame refresh={props.refresh} named={props.GameData.name} namer={props.GameData._id} describer={props.GameData.desc} categorer={props.GameData.cat} stator={props.GameData.status} pricer={props.GameData.price} consoler={props.GameData.console} imager={props.GameData.img}/> : null}
          {props.stater ? <DeleteGame refresh={props.refresh} named={props.GameData.name} namer={props.GameData._id}/> : null}
      </CardActions>
    </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);