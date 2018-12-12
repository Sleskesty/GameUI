import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#BB4430',
        main: '#BB4430',
        dark: '#E4F0D0',
        contrastText: '#EFE6DD',
      },
      secondary: {
        light: '#2D2D34',
        main: '#E4F0D0',
        dark: '#E4F0D0',
        contrastText: '#EFE6DD',
      },
    },
  });

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  inputName = (event) => {
    this.setState({named: event.target.value})
  }
    inputComment = (event) => {
        this.setState({comment: event.target.value})
    }
    creation =  async (event) => {
        const url =`https://apigame-zwbatekpui.now.sh/comments/`
        const required = {
            method: "POST",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({name: this.state.named, 
                comment: this.state.comment
              })
        }
        let theRequest = new Request (url, required)
        await fetch(theRequest)
        .then(res => {return res.json()})
        .catch()
        this.setState({
            named: '',
            comment:'',
            open: false,
        })
        this.props.refresh(event)
      }

  render() {
    return (
        <MuiThemeProvider theme={theme}>
        <Button color="primary" onClick={this.handleClickOpen}>Leave A Comment</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Leave a comment for a game, or the website!
            </DialogContentText>
            <TextField
            onChange={this.inputName}
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
            />
            <TextField
            onChange={this.inputComment}
              multiline
              margin="dense"
              id="name"
              label="Comment"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.creation} color="primary">
              Comment
            </Button>
          </DialogActions>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}