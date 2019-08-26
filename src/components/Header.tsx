import React, { Component } from 'react';
import '../App.scss';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = createStyles({
  header: {
    color: 'brown',
    paddingTop: '60px',
    width: '100%',
  },
  headerNameE: {
    color: '#555555',
    fontFamily: 'cursive',
    fontWeight: 800,
  },
  headerNameC: {
    color: '#aaaaaa',
    fontSize: '40px',
    fontWeight: 400,
    marginLeft: '50px',
    fontFamily: 'cursive',
  }
})

type Props = {
  classes: {
    [propname: string]: string
  }
}

class Header extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <Grid container spacing={6}>
          <Grid item md={8}>
            <Typography variant="h2" component="h2" gutterBottom align="left">
              <span className={classes.headerNameE}>Junxiu Tang</span>
              <span className={classes.headerNameC}>唐俊修</span>
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h2" component="h2" gutterBottom align="left">
              {/* <AccountCircleIcon></AccountCircleIcon> */}
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
