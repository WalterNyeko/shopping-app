import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import bag from '../../images/shopping-bag.png';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from '../../styles/UpperNav';


 const UpperNav = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.bar}>
                <Typography variant="h6" color="inherit">
                    <div className="row">
                        <div className="col-md-4">
                            Hey! &nbsp;&nbsp;
                            <NavLink to="/login" className={classes.navItems}>Sign In</NavLink>
                                &nbsp;&nbsp; or &nbsp;&nbsp;
                            <NavLink to="/register" className={classes.navItems}>Register</NavLink>
                        </div>
                        <div className="col-md-4">
                            <div className={classes.centralItems}>
                                <NavLink to="/deals" className={classes.defaultNavItems}>Daily Deals</NavLink>
                                    &nbsp;&nbsp;
                                <NavLink to="/sell" className={classes.defaultNavItems}>Sell</NavLink>
                                    &nbsp;&nbsp;
                                <NavLink to="/help" className={classes.defaultNavItems}>Help & Contact</NavLink>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={classes.rightMostItems}>
                                <img src={bag} alt="bag"/> &nbsp;&nbsp;
                                <NavLink to="/cart" className={classes.defaultNavItems}>Your Bag</NavLink>
                                    &nbsp;&nbsp;
                                <NavLink to="/total" className={classes.navItems}>$ 0.00</NavLink>
                            </div>
                            
                        </div>
                    </div>
                </Typography>
            </AppBar>
            <AppBar position="static" color="default" className={classes.bigBar}>
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.bigBarToolBar}>
                    <div className="row">
                        <div className="col-md-6">
                            <NavLink to="/home" className={classes.shopmateLogo}>SHOPMATE</NavLink>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4" style={{ padding: '10px'}}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                </Typography>

                </Toolbar>
                
            </AppBar>
        </div>
    )
}
export default UpperNav;
