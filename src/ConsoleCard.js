import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteConsole from './deleteConsole';
import EditConsole from './editConsole';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';

const styles = theme => ({
    card: {
        maxWidth: 400,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      actions: {
        display: 'flex',
      },
      expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginRight: -8,
        },
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      root: {
        flexGrow: 1,
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
        padding: theme.spacing.unit * 2,
      },
      gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
      },
    });

    class RecipeReviewCard extends React.Component {
        state = { expanded: false };
      
        handleExpandClick = () => {
          this.setState(state => ({ expanded: !state.expanded }));
        };
      
        render() {
          const { classes } = this.props;
      
          return (
          <div className={classes.root}>
            <Card className={classes.card}>
 <Typography align='center' variant="h5" component="h2">{this.props.GameData.name}</Typography>
              <CardMedia
                className={classes.media}
                image={this.props.GameData.img}
                title="Console"
              />
              <CardContent>
                <Typography component="p">
                {this.props.GameData.desc}
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                {this.props.logger ? <EditConsole refresh={this.props.refresh} named={this.props.GameData.name} namer={this.props.GameData._id} describer={this.props.GameData.desc} cpu={this.props.GameData.cpu} gpu={this.props.GameData.gpu} memory={this.props.GameData.memory} input={this.props.GameData.input} imager={this.props.GameData.img} av={this.props.GameData.av}/> : null}
                {this.props.logger ? <DeleteConsole refresh={this.props.refresh} named={this.props.GameData.name} namer={this.props.GameData._id}/> : null}
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    CPU:   {this.props.GameData.cpu}
                  </Typography>
                  <Typography paragraph>      
                    GPU:   {this.props.GameData.gpu}
                    </Typography>
                  <Typography paragraph>
                    Memory: {this.props.GameData.memory}
                  </Typography>
                  <Typography>
                    Input/Output:   {this.props.GameData.input}
                  </Typography>
                  <Typography paragraph>
                    AV output:   {this.props.GameData.av}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
  );
}
    }
export default withStyles(styles)(RecipeReviewCard);