import React, { Component, Fragment } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Login from './Login'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConsoleHandler from './ConsoleHandler';
import Button from '@material-ui/core/Button';
import AppManager from './AppManager';
import StatsHandler from './StatsHandler'

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
    },
  },
});

class App extends Component {
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
    console.log("in handleInputChange")
    this.handleSubmit(this.state.filterParam)
    
  }
  inputChange = (event) => {
    this.setState({filterParam: event.target.value})
  }
  async handleSubmit(param="") {
    const url =`https://apigame-lxmqpjuhyx.now.sh/games/${param}`
    await fetch (url)
    .then(async res => {

      
      //console.log('error but hit here')
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
  userLogIn = async ({user, password}) => {
    let URL ='https://apigame-lxmqpjuhyx.now.sh/users/login'
    const requiredcontent = {
      method: "POST",
      headers:{"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify({username:user, password:password})
    }
    
    let request = new Request(URL,requiredcontent)
    await fetch(request)
    .then(async res => {
      
      if(res.ok) {
        const response = await res.json()
        this.setState({
           isLoggedIn: response.userIsLoggedIn,
           success: true
       })
      } else {console.log('here is an error')}
    })
    .catch(err => console.log(err))
  }
  render() {
    const { classes } = this.props;
    return (
      <Router>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Video Game Tracker
          </Typography>
          {this.state.isLoggedIn ?<Fragment> <Button component={Link} to='/' color="inherit">     
          Games
      </Button>
      <Button component={Link} to='/consoles' color="inherit">
                Consoles
              </Button>
              <Button component={Link} to='/stats' color="inherit">
              Stats
              </Button>
              </Fragment>
       : <Login userLog={this.userLogIn}/> }
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    <Route exact path='/' render={() => <AppManager logger={this.state.isLoggedIn}/>}/>
    <Route path='/consoles' render={()=> <ConsoleHandler logger={this.state.isLoggedIn}/>}/>
    <Route path='/stats' render={()=> <StatsHandler/>}/>
        </MuiThemeProvider>
        </Router>
    );
  }
}

export default withStyles(styles)(App);