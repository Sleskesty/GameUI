import * as React from "react";
import { Chart } from "react-google-charts";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
      root: {
        flexGrow: 1,
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
        padding: 50,
      },
      gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
      },
    });

 class Stats extends React.Component {
    state ={
        loaded:false
    }
    componentWillMount() {
        this.handlePuzzle()
        this.handleParty()
        this.handleAction()
        this.handleRPG()
        this.handleBuilder()
        this.handlePlatforming()
        this.handleParty()
        this.handleStrategy()
        this.handleRacing()
        this.handlePS4()
        this.handlePC()
        this.handleSwitch()
      }
      async handlePS4(param="") {
        let url =`https://apigame-vwhgpbpsxw.now.sh/games/PS4`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            ps4: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
         url =`https://apigame-vwhgpbpsxw.now.sh/games/PC`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            pc: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }
      async handleSwitch(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/switch`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            switch: body.length,
            loaded: true
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }
      async handlePC(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/PC`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            pc: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }async handleAction(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/action`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            action: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }async handleRPG(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/rpg`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            rpg: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }async handleStrategy(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/strategy`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            strategy: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }async handlePlatforming(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/Platforming`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            platform: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }async handleRacing(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/racing`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            racing: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }async handleBuilder(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/builder`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            builder: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }async handleParty(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/Party`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            party: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }
    async handlePuzzle(param="") {
        const url =`https://apigame-vwhgpbpsxw.now.sh/games/Puzzle`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            puzzle: body.length,
          })
        }
        })
        .catch((error) => console.log('OH MY GOD', this.state.cards))
      }
  render() {
    const { classes } = this.props;
    return (
        <div>
             {this.state.loaded ? <Grid container className={classes.root} spacing={40}>
        <Grid item xs={11}>
          <Grid container className={classes.demo}>
            <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  data={[
    ['Console', 'Number of Games'],
    ['PS4', this.state.ps4],
    ['PC', this.state.pc],
    ['Switch', this.state.switch],
  ]}
  options={{
    title: 'Games By Console',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  data={[
    ['Category', 'Number of games'],
    ['Action', this.state.action],
    ['RPG', this.state.rpg],
    ['Strategy', this.state.strategy],
    ['Puzzle', this.state.puzzle],
    ['Party', this.state.party],
    ['Builder',this.state.builder],
    ['Platforming',this.state.platform],
    ['Racing' , this.state.racing]
  ]}
  options={{
    title: 'Games by Category',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
</Grid>
</Grid>
</Grid> : 
        <Grid container className={classes.root} spacing={24} justify='center' alignItems='center'>
        <Grid>
          <CircularProgress className={classes.progress} color="primary" />
        </Grid>
      </Grid>
    }
</div>
    );
  }
}
export default withStyles(styles)(Stats);