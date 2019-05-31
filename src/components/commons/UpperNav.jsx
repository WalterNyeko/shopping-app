import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import bag from '../../images/shopping-bag.png';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from '../../styles/UpperNav';
import { SpanModal } from '../../../src/containers/commons/SpanModal';
import SignUpPage from '../../containers/customers/SignupPage';
import LoginPage from '../../containers/customers/LoginPage';


 const UpperNav = ({ isLoggedIn, allDepartments }) => {
    const classes = useStyles();
    const { departments } = allDepartments;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.bar}>
                <Typography variant="h6" color="inherit">
                    <div className="row">
                        <div className="col-md-4">
                            {isLoggedIn? (''): (
                                <div>
                                Hey! &nbsp;&nbsp;
                                <SpanModal 
                                    spanText="Sign In"
                                    modalTitle="Login To Your ShopMate Account"
                                    modalWidth="450px"
                                    modalContent={<LoginPage/>}
                                    className={classes.navItems}/>
                                    &nbsp;&nbsp; or &nbsp;&nbsp;
                                <SpanModal 
                                    spanText="Register"
                                    modalTitle="Register For A ShopMate"
                                    modalWidth="450px"
                                    modalContent={<SignUpPage/>}
                                    className={classes.navItems}/>
                                </div>
                            )}
                            
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
                        <div className="col-md-3">
                            <NavLink to="/" className={classes.shopmateLogo}>SHOPMATE</NavLink>
                            
                        </div>
                        <div className="col-md-5" style={{marginTop: '10px'}}>

                            {departments && departments.map(({department_id, name}) => (
                                <Fragment key={department_id}>
                                    <NavLink to={`/department/${department_id}`} className={classes.navItemsMainBar}>{name}</NavLink>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </Fragment>
                            ))}

                        </div>
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
