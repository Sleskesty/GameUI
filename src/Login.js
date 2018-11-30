import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2D2D34',
      main: '#EFE6DD',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default class FormDialog extends React.Component {
  state = {
    open: false,
      password:'',
      username:'',
      logger: false
  };
  handleSnacks = () => {
    this.setState({ logger: true });
  };
  handleClosedSnacks = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
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
      <MuiThemeProvider theme={theme}>
        <Button onClick={this.handleClickOpen} color='secondary'>Log in</Button>
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
      </MuiThemeProvider>
    );
  }
}