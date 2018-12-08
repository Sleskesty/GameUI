import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteComment from './deleteGame';
import EditComment from './editComment'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 10,
    width: '95%'
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {props.commentData.name}
        </Typography>
        <Typography component="p">
          {props.commentData.comment}
        </Typography>
      {props.stater ? <DeleteComment section={'comments'} refresh={props.refresh} named={'this comment'} namer={props.commentData._id}/> : null}
      {props.stater ? <EditComment refresh={props.refresh} named={props.commentData.name} namer={props.commentData._id} describer={props.commentData.comment} /> : null}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);