import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import WeekendIcon from '@material-ui/icons/Weekend';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";

const authorisationStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttonContainer: {
        marginTop: theme.spacing(2),
    },
    IconInsideButton: {
        position: 'absolute',
        left: 10
    }


}));

const Authorisation = () => {

    const classes = authorisationStyles();

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <WeekendIcon/>
                </Avatar>
                <Typography component="h1" variant="h4">
                    Авторизация
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Запомнить меня"
                    />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Войти
                        </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link to="/registration" variant="body2">
                                Забыли пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/registration" variant="body2">
                                Еще не зарегистрированы? Зарегистрироваться.
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid component="div" className={classes.buttonContainer}>

                        <p>
                            <Button
                                variant="outlined"
                                fullWidth>
                                <FacebookIcon color="primary" className={classes.IconInsideButton}/> Войти через Facebook
                            </Button>
                        </p>
                        <p>
                            <Button
                                variant="outlined"
                                fullWidth>
                                <GTranslateIcon color="primary" className={classes.IconInsideButton}/> Войти через Google
                            </Button>
                        </p>

                    </Grid>
                </form>
            </div>
        </Grid>
    )
}

export default Authorisation;