import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Authorisation from "../authorisation/authorisation";
import Registration from "../registration/registration";
import {BrowserRouter as Router, Route} from "react-router-dom";


const authorisationStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    },
}));

const StartingPage = () => {
    const classes = authorisationStyles();

    return (
        <Router>
            <Grid component="main" className={classes.root}>
                <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                <Route path="/" component={Authorisation} exact />
                <Route path="/registration" component={Registration} />
            </Grid>
        </Router>

    )
}

export default StartingPage;
