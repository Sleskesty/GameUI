import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  inputStatus = (event) => {
    this.setState({stated: event.target.value})
  }
  inputPrice = (event) => {
    this.setState({priced: event.target.value})
  }
  inputImage = (event) => {
    this.setState({imaged: event.target.value})
  }
  inputCategory = (event) => {
    this.setState({cated: event.target.value})
  }
  inputConsole = (event) => {
    this.setState({console: event.target.value})
  }
  async creation(event) {
    const url =`https://apigame-oboomuqnft.now.sh/games/`
    const required = {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({name: this.state.named, 
            desc: this.state.desced, 
            price: this.state.priced, 
            cat: this.state.cated, 
            status: this.state.stated, 
            img: this.state.imaged,
            console: this.state.console
          })
    }
    let theRequest = new Request (url, required)
    await fetch(theRequest)
    .then(res => {return res.json()})
    .catch()
    this.setState({
        named: '',
        desced:'',
        priced:'',
        cated:'',
        stated:'',
        img:'',
        console:'',
        open: false,
    })
    this.props.refresh(event)
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Add Game</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Game</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Add a game please fill out all text fields
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
              label="Category"
              fullWidth
              required
              onChange={this.inputCategory}
            />
            <TextField
              margin="dense"
              id="name"
              label="Status"
              fullWidth
              required
              onChange={this.inputStatus}
            />
            <TextField
              margin="dense"
              id="name"
              label="Price"
              fullWidth
              required
              type="number"
              onChange={this.inputPrice}
            />
            <TextField
              margin="dense"
              id="name"
              label="Console"
              fullWidth
              required
              onChange={this.inputConsole}
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
      </div>
    );
  }
}
export default CreateItem