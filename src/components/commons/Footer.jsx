import React from 'react';
import { useStyles } from '../../styles/Categories';
import Typography from '@material-ui/core/Typography';


const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                SHOP MATE ONLINE
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Shopping Mate Is Your Online Shop For All Your Needs
            </Typography>
        </footer>
    )
}
export default Footer;
