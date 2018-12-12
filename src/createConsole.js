import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
      main: '#BB4430',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

class CreateItem extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
    open: false,
  };
  this.creation= this.creation.bind(this)
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  inputName = (event) => {
    this.setState({named: event.target.value})
  }
  inputDescription = (event) => {
    this.setState({desced: event.target.value})
  }
  inputgpu = (event) => {
    this.setState({gpu: event.target.value})
  }
  inputMemory = (event) => {
    this.setState({memory: event.target.value})
  }
  inputImage = (event) => {
    this.setState({imaged: event.target.value})
  }
  inputcpu = (event) => {
    this.setState({cpu: event.target.value})
  }
  inputInput = (event) => {
    this.setState({input: event.target.value})
  }
  inputAV = (event) => {
    this.setState({av: event.target.value})
  }
  async creation(event) {
    const url =`https://apigame-fsairvnhfw.now.sh/consoles/`
    const required = {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({name: this.state.named, 
            desc: this.state.desced, 
            input: this.state.input, 
            cpu: this.state.cpu, 
            gpu: this.state.gpu, 
            img: this.state.imaged,
            memory: this.state.memory,
            av: this.state.av
          })
    }
    let theRequest = new Request (url, required)
    await fetch(theRequest)
    .then(res => {return res.json()})
    .catch()
    this.setState({
        named: '',
        desced:'',
        input:'',
        cpu:'',
        gpu:'',
        memory:'',
        img:'',
        av:'',
        open: false,
    })
    this.props.refresh(event)
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Button color='secondary' onClick={this.handleClickOpen}>Add Console</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Game</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Add a console please fill out all text fields
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              required
              onChange={this.inputName}
            />
            <TextField
              margin="dense"
              id="name"
              label="Description"
              fullWidth
              required
              onChange={this.inputDescription}
            />
            <TextField
              margin="dense"
              id="name"
              label="CPU"
              fullWidth
              required
              onChange={this.inputcpu}
            />
            <TextField
              margin="dense"
              id="name"
              label="GPU"
              fullWidth
              required
              onChange={this.inputgpu}
            />
            <TextField
              margin="dense"
              id="name"
              label="AV output"
              fullWidth
              required
              onChange={this.inputAV}
            />
            <TextField
              margin="dense"
              id="name"
              label="Input and Output"
              fullWidth
              required
              onChange={this.inputInput}
            />
            <TextField
              margin="dense"
              id="name"
              label="Memory"
              fullWidth
              required
              onChange={this.inputMemory}
            />
            <TextField
              margin="dense"
              id="name"
              label="Image"
              fullWidth
              required
              onChange={this.inputImage}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.creation} color="primary">
              Add Game
            </Button>
          </DialogActions>
        </Dialog>
        </MuiThemeProvider>
    );
  }
}
export default CreateItem