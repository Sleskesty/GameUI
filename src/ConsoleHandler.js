import React, { Component } from 'react';
import './App.css';
import ConsoleCard from './ConsoleCard'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CreateConsole from './createConsole';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
      progress: {
        padding: 100,
        margin: theme.spacing.unit * 2,
        alignItems: 'center',
        justify: 'center'
      },
    },
  },
});

class ConsoleHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loaded: false,
      filter: "",
      isLoggedIn: false,

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange= this.handleInputChange.bind(this)
  }
  componentWillMount() {
    this.handleSubmit()
  }
  handleInputChange(event) {
    event.preventDefault()
    this.handleSubmit(this.state.filterParam)
    
  }
  inputChange = (event) => {
    this.setState({filterParam: event.target.value})
  }
  async handleSubmit(param="") {
    const url =`https://apigame-hwqsxqwkld.now.sh/consoles/${param}`
    await fetch (url)
    .then(async res => {

      
      if( res.ok ) {
        const body = await res.json()
      this.setState({
        cards: body,
        loaded: true,
        filter: param,
      })
    }
    })
    .catch((error) => console.log('OH MY GOD', this.state.cards))
  }
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
      {this.props.logger ? <CreateConsole  refresh={this.handleInputChange}/> : null}
        <Grid container className={classes.root} spacing={40}>
        <Grid item xs={11}>
          <Grid container className={classes.demo}>
        {this.state.loaded ? this.state.cards.map( (v,i) => {return(<ConsoleCard logger={this.props.logger} refresh={this.handleInputChange} key={i} GameData={v}/>)} ) :         
        <Grid container spacing={24} justify='flex-end' alignItems='center' direction='column'>
          <Grid>
          <br/>
          <br/>
          <br/>
            <CircularProgress className={classes.progress} color="primary" />
          </Grid>
        </Grid>}
        </Grid>
        </Grid>
        </Grid>
        </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(ConsoleHandler);