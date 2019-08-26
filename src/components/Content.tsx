import React, { Component, CSSProperties } from 'react';
import '../App.scss';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VerticalTabs from './VerticalTabs';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const styles = createStyles({
  subTitle: {
    fontSize: '30px',
    fontFamily: 'cursive',
    fontWeight: 800,
    color: '#555555',
    textDecoration: 'none',
  },
  contentText1: {
    fontFamily: 'cursive',
    fontSize: '16px',
    // paddingRight: '40px',
  },
  contentText2: {
    fontFamily: 'cursive',
    fontSize: '18px'
  },
  educationLogo: {
    width: '100%',
  },
  contentNode: {
    margin: '0 0 0px 0'
  },
  publicationTeaserContainer: {
    width: '100%',
    height: '140px',
    borderRadius: '4px',
    boxShadow: '#00000024 0px 0px 4px 2px',
  },
  publicationTeaser: {
    width: '100%',
    height: '100%',
    objectFit: "cover",
  },
  publicationTitle: {
    fontWeight: 800,
    fontSize: '20px',
    color: '#353535',
    fontFamily: 'cursive',
  },
  publicationAuthors: {
    color: '#555555',
    fontFamily: 'cursive',
  },
  publicationIconText: {
    fontSize: '18px',
    margin: '0 5px',
    position: "relative",
    top: '-6px',
  }
});

type Props = {
  classes: {
    [propName: string]: string
  }
}

class Content extends Component<Props> {
  render() {
    const { classes } = this.props;
    const educationNode = 
      <React.Fragment>
        <Grid container spacing={6}>
          <Grid item md={8}>
            <Typography variant="h2" component="h2" gutterBottom align="left">
              <a className={classes.subTitle} href='#education'>{`# Education`}</a>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} justify="center" alignItems="center" className={classes.contentNode}>
          <Grid item md={3}>
            <Typography variant="subtitle1" gutterBottom align="right" className={classes.contentText1}>
              {`Sept. 2019 - Jun. 2024`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="right" className={classes.contentText1}>
              {`Hangzhou, China`}
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.contentText2} style={{color:'#111111',fontWeight:800}}>
              {`Ph.D Candidate`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.contentText2}>
              {`State Key Lab of CAD&CG, Zhejiang University`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.contentText2}>
              {`Supervised by Prof. Yingcai Wu`}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <img alt="Zhejiang University" src="./zju.png" className={classes.educationLogo}/>
          </Grid>
        </Grid>
        <Grid container spacing={4} justify="center" alignItems="center" className={classes.contentNode}>
          <Grid item md={3}>
            <Typography variant="subtitle1" gutterBottom align="right" className={classes.contentText1}>
              {`Sept. 2014 - Jun. 2019`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="right" className={classes.contentText1}>
              {`Hangzhou, China`}
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.contentText2} style={{color:'#111111',fontWeight:800}}>
              <b>{`Undergraduate Student`}</b>
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.contentText2}>
              {`College of Computer Science and Technology, Zhejiang University`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.contentText2}>
              {`Bachelor in Digital Media Technology`}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <img alt="Zhejiang University" src="./zju.png" className={classes.educationLogo}/>
          </Grid>
        </Grid>
      </React.Fragment>
    const publicationNode = 
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Typography variant="h2" component="h2" gutterBottom align="left">
              <a className={classes.subTitle} href='#publication'>{`# Publication`}</a>
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid container spacing={4} justify="center" alignItems="center" className={classes.contentNode}>
          <Grid item md={3}>
            <div className={classes.publicationTeaserContainer}>
              <img alt="Junxiu Tang" src="./jov2019.png" className={classes.publicationTeaser}/>
            </div>
          </Grid>
          <Grid item md={9}>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.publicationTitle}>
              Design Guidelines for Augmenting Short-form Videos<br/>using Animated Data Visualizations
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.publicationAuthors}>
              Tan Tang, <b>Junxiu Tang</b>, Jiayi Hong, Lingyun Yu, Peiran Ren, Yingcai Wu
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.publicationAuthors}>
              <Grid container justify="flex-start" alignItems="center">
                <Grid item md={2}>
                  <PictureAsPdfIcon />
                  <span className={classes.publicationIconText}>Pdf</span>
                </Grid>
                <Grid item md={2}>
                  <OndemandVideoIcon />
                  <span className={classes.publicationIconText}>Video</span>
                </Grid>
              </Grid>
            </Typography> 
          </Grid>
        </Grid> */}
        <Grid container spacing={4} justify="center" alignItems="center" className={classes.contentNode}>
          <Grid item md={3}>
            <div className={classes.publicationTeaserContainer}>
              <img alt="Junxiu Tang" src="./jov2018.png" className={classes.publicationTeaser}/>
            </div>
          </Grid>
          <Grid item md={9}>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.publicationTitle}>
              Toward the better modeling and visualization of uncertainty<br/> for streaming data
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.publicationAuthors}>
              Tan Tang, Kaijuan Yuan, <b>Junxiu Tang</b>, Yingcai Wu
            </Typography>
            {/* <Typography variant="subtitle1" gutterBottom align="left" className={classes.publicationAuthors}>
              <Grid item md={2}>
                <PictureAsPdfIcon />
                <span className={classes.publicationIconText}>Pdf</span>
              </Grid>
            </Typography> */}
          </Grid>
        </Grid>
      </React.Fragment>
    const contactNode = 
      <React.Fragment>
        <Grid container spacing={6}>
          <Grid item md={8}>
            <Typography variant="h2" component="h2" gutterBottom align="left">
              <a className={classes.subTitle} href='#contact'>{`# Contact`}</a>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={8} justify="center" alignItems="center" className={classes.contentNode}>
          <Grid item md={3} className={classes.contentText}>
            <Typography variant="subtitle1" gutterBottom align="right" className={classes.contentText1}>
              {`Address`}
            </Typography>
          </Grid>
          <Grid item md={9} className={classes.contentText}>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.contentText2}>
              {`Rm.408-2, Mengminwei Bd., Zijingang Campus of Zhejiang University`}
              <br/>
              {`No.866 Yuhangtang Rd., Xihu District, Hangzhou, Zhejiang. 310058`}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={8} justify="center" alignItems="center" className={classes.contentNode}>
          <Grid item md={3} className={classes.contentText}>
            <Typography variant="subtitle1" gutterBottom align="right" className={classes.contentText1}>
              {`E-mail`}
            </Typography>
          </Grid>
          <Grid item md={9} className={classes.contentText}>
            <Typography variant="subtitle1" gutterBottom align="left" className={classes.contentText2}>
              {`tangjxhugh@126.com`}
            </Typography>
          </Grid>
        </Grid>
      
      </React.Fragment>
    
    return (
      <div className="content">
        { educationNode }
        { publicationNode }
        { contactNode }
      </div>
    )
  }
}

export default withStyles(styles)(Content);
