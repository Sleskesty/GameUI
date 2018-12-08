import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
        const url = `https://apigame-fsairvnhfw.now.sh/comments/${this.props.namer}`
        const required = {
            method: "PUT",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                name: this.state.named,
                comment:this.state.desced
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
  inputComment = (event) => {
    this.setState({desced: event.target.value})
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
          <DialogTitle id="form-dialog-title">Edit Comment</DialogTitle>
          <DialogContent>
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
              label="Comment"
              multiline
              onChange={this.inputComment}
              defaultValue={this.props.describer}
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