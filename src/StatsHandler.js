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
        this.handlePS4()
      }
      async handlePS4(param="") {
        let url =`https://apigame-vwhgpbpsxw.now.sh/games/`
        await fetch (url)
        .then(async res => {
    
          
          //console.log('error but hit here')
          if( res.ok ) {
            const body = await res.json()
          this.setState({
            ps4: body.filter(ps4 => ps4.console === 'PS4').length,
            pc: body.filter(pc => pc.console === 'PC').length,
            switch: body.filter(switcher => switcher.console === 'Switch').length,
            action: body.filter(action => action.cat.includes('Action')).length,
            rpg: body.filter(rpg => rpg.cat.includes('RPG')).length,
            puzzle: body.filter(puzzle => puzzle.cat.includes('Puzzle')).length,
            strategy: body.filter(strategy => strategy.cat.includes('Strategy')).length,
            party: body.filter(party => party.cat.includes('Party')).length,
            builder: body.filter(builder => builder.cat.includes('Builder')).length,
            racing: body.filter(racing => racing.cat.includes('Racing')).length,
            platform: body.filter(platform => platform.cat.includes('Platform')).length,
            loaded: true
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