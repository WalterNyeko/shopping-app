import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heading: {
      padding: "10px", 
      textAlign: 'center'
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 4),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      backgroundColor: '#f1f1f1',
      marginTop: '120px',
      overflowX: 'none',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer'
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
      backgroundSize: '300px 100px'
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: '#f1f1f1',
      padding: theme.spacing(4),
    },
    progress: {
      margin: theme.spacing(2),
      color: '#00695c',
    },
    linearColorPrimary: {
      backgroundColor: '#b2dfdb',
      marginLeft: '0px'
    },
    linearBarColorPrimary: {
      backgroundColor: '#00695c',
    },
  }));