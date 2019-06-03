import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    top: 0 /* Position the navbar at the top of the page */,
    width: "100%" /* Full width */,
    position: "fixed",
    zIndex: 1
  },
  bar: {
    boxShadow: "none",
    height: "40px",
    paddingLeft: "20px",
    paddingBottom: "5px",
    paddingTop: "5px"
  },
  bigBar: {
    boxShadow: "none",
    height: "80px",
    backgroundColor: "#343434",
    color: "white",
    padding: "10px"
  },

  navItems: {
    color: "red",
    fontWeight: "14px",
    textDecoration: "none",
    cursor: "pointer",
    // zIndex: "5035"
  },

  navItemsMainBar: {
    color: "white",
    fontWeight: "18px",
    textDecoration: "none",
    cursor: "pointer"
  },

  defaultNavItems: {
    color: "gray",
    fontWeight: "14px",
    textDecoration: "none"
  },

  rightMostItems: {
    color: "gray",
    float: "right",
    fontWeight: "14px",
    textDecoration: "none",
    marginRight: "10px"
  },
  centralItems: {
    color: "gray",
    alignContent: "center",
    fontWeight: "15px",
    textDecoration: "none"
  },
  bigBarToolBar: {
    width: "100vw"
  },

  shopmateLogo: {
    color: "#ff3d3d",
    alignContent: "center",
    fontSize: "35px",
    textDecoration: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  searchBoxPadding: {
    padding: "10px"
  }
}));
