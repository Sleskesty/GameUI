import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
      password:'',
      username:'',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  inputPassword = (event) => {
    this.setState({password: event.target.value})
  }
  inputUsername = (event) => {
    this.setState({username: event.target.value})
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Log in</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Log in</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="email"
              onChange={this.inputUsername}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Password"
              onChange={this.inputPassword}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>this.props.userLog({user: this.state.username, password: this.state.password})} color="primary">
              Log In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}