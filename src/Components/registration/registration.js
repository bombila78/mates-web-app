import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import WeekendIcon from '@material-ui/icons/Weekend';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import DatePicker from "../date-picker/date-picker";
import GenderRadio from "../gender-radio/gender-radio";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'

const registrationStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(2, 4),
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
        margin: theme.spacing(0, 0, 0),
    },
    exitButton: {
        margin: theme.spacing(1),
        display: "flex",
        justifyContent: "flex-end",
    }

}))

const Registration = () => {
    const classes = registrationStyles();

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.exitButton}>
              <Link to="/"><CancelOutlinedIcon color="secondary" /></Link>
            </div>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <WeekendIcon/>
                </Avatar>
                <Typography component="h1" variant="h4">
                    Регистрация
                </Typography>
                <form className={classes.form} noValidate>
                    <p>ЛИЧНАЯ ИНФОРМАЦИЯ</p>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        type="text"
                        id="first-name"
                        required
                        placeholder="Имя"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        type="text"
                        id="last-name"
                        required
                        placeholder="Фамилия"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Grid container justify="space-between">
                        <Grid item>
                            <DatePicker />
                        </Grid>
                        <Grid item>
                            <GenderRadio />
                        </Grid>
                    </Grid>
                    <p>КОНТАКТНАЯ ИНФОРМАЦИЯ</p>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        type="email"
                        id="email-address"
                        required
                        placeholder="Email"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        type="tel"
                        id="phone-number"
                        required
                        placeholder="Номер телефона"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <p>ПАРОЛЬ</p>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        type="password"
                        id="userpass"
                        required
                        placeholder="Введите пароль"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        type="password"
                        id="userpass-repeat"
                        required
                        placeholder="Повторите пароль"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <p>Регистрируясь, вы соглашаетесь с нашими условиями и политикой конфиденциальности.</p>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                         ЗАРЕГИСТРИРОВАТЬСЯ
                    </Button>
                </form>
            </div>
        </Grid>
    )
}

export default Registration;

