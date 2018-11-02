import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'
import GameCard from './gamecard'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CreateItem from './createItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loaded: false,
      filter: ""

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange= this.handleInputChange.bind(this)
  }
  componentWillMount() {
    this.handleSubmit()
  }
  handleInputChange(event) {
    event.preventDefault()
    console.log("in handleInputChange")
    this.handleSubmit(this.state.filterParam)
    
  }
  inputChange = (event) => {
    this.setState({filterParam: event.target.value})
  }
  async handleSubmit(param="") {
    const url =`https://apigame-oboomuqnft.now.sh/games/${param}`
    await fetch (url)
    .then(async res => {

      
      //console.log('error but hit here')
      if( res.ok ) {
        const body = await res.json()
      this.setState({
        cards: body,
        loaded: true,
        filter: param
      })}
    })
    .catch((error) => console.log('OH MY GOD', this.state.cards))
  }
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
      <div>
        <CreateItem refresh={this.handleInputChange}/>
        <form onSubmit={this.handleInputChange}>
          <TextField type="text" onChange={this.inputChange}/>
          <IconButton type="submit">
            <SearchIcon/>
          </IconButton>
        </form>
        <Grid container className={classes.root} spacing={64}>
        <Grid item xs={11}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
        {this.state.loaded ? this.state.cards.map( (v,i) => {return(<GameCard refresh={this.handleInputChange} key={i} GameData={v}/>)} ) : <React.Fragment></React.Fragment>}
        </Grid>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
