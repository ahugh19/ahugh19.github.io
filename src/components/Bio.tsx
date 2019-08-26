import React, { Component } from 'react';
import '../App.scss';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  avatarArea: {
    width: '100%',
    margin: '30px 0',
  },
  avatar: {
    width: 130,
    height: 130,
    left: '20%',
  },
  bioText: {
    fontSize: '20px',
    mrgin: '30px 0',
    fontFamily: 'cursive',
  },
  aLink: {
    color: 'brown',
    fontWeight: 700,
    textDecoration: 'none',
  }
})

type Props = {
  classes: {
    [propName: string]: string
  }
}

class Bio extends Component<Props> {
  state = {
    bioText: ''
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="center">
          <Grid item md={4}>
            <div className={classes.avatarArea}>
              <Avatar alt="Junxiu Tang" src="./avatar.png" className={classes.avatar} />
            </div>
          </Grid>
          <Grid item md={8}>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.bioText}>
              I’m a 1st-year Computer Science Ph.D. candidate 
              studying Data Visualization at&nbsp;
              <a href='http://www.cad.zju.edu.cn/' className={classes.aLink}>State Key Lab of CAD&CG</a>,&nbsp;
              <a href='https://www.zju.edu.cn/' className={classes.aLink}>Zhejiang University</a>&nbsp;
              and an <a href='https://zjuidg.org/' className={classes.aLink}>Interactive Data Group</a>&nbsp;
              member supervised by&nbsp;
              <a href='http://www.ycwu.org/' className={classes.aLink}>Prof. Yingcai Wu</a>.
              My research interest lies in the <b style={{fontWeight: 700}}>Information Visualization</b>.
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Bio);