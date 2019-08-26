import React, { Component, ReactElement } from 'react';
import '../App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Header from './Header';
import Bio from './Bio';
import Content from './Content';
import Footer from './Footer';

const styles = createStyles({
  homepage: {
    // backgroundColor: '#cfe8fc',
    height: '100vh'
  },
})

type Props = {
  classes: {
    [propName: string]: string
  }
}

class Homepage extends Component<Props> {
  render() {
    const { classes } = this.props;
    const homepage = 
      <Typography component="div">
          <Header />
          <Bio />
          <Content />
          <Footer />
      </Typography>

    return (
      <div>
        <CssBaseline />
        <Container maxWidth="md" className={classes.homepage}>
          {homepage}
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Homepage);
