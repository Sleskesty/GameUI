import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class EditGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            named:this.props.named
          }
          this.modification= this.modification.bind(this)
    }
    async modification(event) {
        const url = `https://apigame-lxmqpjuhyx.now.sh/games/${this.props.namer}`
        const required = {
            method: "PUT",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                name: this.state.named,
                cat: this.state.cated,
                img: this.state.imged,
                desc: this.state.desced,
                console: this.state.consoled,
                status: this.state.statused,
                price: this.state.priced,
            })
        }
        let theRequest = new Request(url, required)
        await fetch(theRequest)
        .then(res => {return res.json()})
        .catch()
        this.setState({
            open: false,
        })
        this.props.refresh(event)
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
    this.setState({statused: event.target.value})
  }
  inputPrice = (event) => {
    this.setState({priced: event.target.value})
  }
  inputImage = (event) => {
    this.setState({imged: event.target.value})
  }
  inputCategory = (event) => {
    this.setState({cated: event.target.value})
  }
  inputConsole = (event) => {
    this.setState({consoled: event.target.value})
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.handleClickOpen}>Edit</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Game</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Make changes to {this.props.named}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              onChange={this.inputName}
              defaultValue={this.props.named}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Description"
              onChange={this.inputName}
              defaultValue={this.props.describer}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Category"
              defaultValue={this.props.categorer}
              onChange={this.inputCategory}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Status"
              defaultValue={this.props.stator}
              onChange={this.inputStatus}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Price"
              defaultValue={this.props.pricer}
              onChange={this.inputPrice}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Console"
              defaultValue={this.props.consoler}
              onChange={this.inputConsole}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Image"
              defaultValue={this.props.imager}
              onChange={this.inputImage}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.modification} color="primary">
              Make Changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}