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
        const url = `https://apigame-tfqicysjxw.now.sh/consoles/${this.props.namer}`
        const required = {
            method: "PUT",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                name: this.state.named,
                av: this.state.av,
                img: this.state.imged,
                desc: this.state.desced,
                input: this.state.input,
                cpu: this.state.cpuer,
                gpu: this.state.gpu,
                memory:this.state.memory
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
  inputCPU = (event) => {
    
    this.setState({cpuer: event.target.value})
    console.log(this.state.cpuer)
  }
  inputGPU = (event) => {
    this.setState({gpu: event.target.value})
  }
  inputImage = (event) => {
    this.setState({imged: event.target.value})
  }
  inputAV = (event) => {
    this.setState({av: event.target.value})
  }
  inputInput = (event) => {
    this.setState({input: event.target.value})
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
              onChange={this.inputDescription}
              defaultValue={this.props.describer}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="CPU"
              defaultValue={this.props.cpu}
              onChange={this.inputCPU}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="GPU"
              defaultValue={this.props.gpu}
              onChange={this.inputGPU}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Memory"
              defaultValue={this.props.memory}
              onChange={this.inputMemory}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Input/Output"
              defaultValue={this.props.input}
              onChange={this.inputInput}
              fullWidth
            />
            <TextField
            margin="dense"
            id="name"
            label="AV Output"
            defaultValue={this.props.av}
            onChange={this.inputAV}
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