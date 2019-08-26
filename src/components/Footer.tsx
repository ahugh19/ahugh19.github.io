import React, { Component } from 'react';
import '../App.scss';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = createStyles({
  footer: {
    paddingTop: '60px',
    width: '100%',
  },
  footerText: {
    color: '#aaaaaa',
    fontFamily: 'cursive',
  }
})

type Props = {
  classes: {
    [propname: string]: string
  }
}

class Footer extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <Grid container spacing={6}>
          <Grid item md={12}>
            <Typography variant="subtitle1" component="p" gutterBottom align="center">
              <span className={classes.footerText}>Powered by React.js | &copy; 2019 Junxiu Tang</span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);
