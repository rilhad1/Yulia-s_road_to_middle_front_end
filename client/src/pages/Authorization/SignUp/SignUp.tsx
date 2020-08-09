import React from 'react';
import {
	Avatar,
	Button,
	CircularProgress,
	Container,
	CssBaseline,
	Grid,
	Link,
	TextField,
	Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import {Link as RouterLink} from "react-router-dom";
import useSignUpData from "./useSignUpData";

export default function SignUp() {
	const classes = useStyles();
	const [registrationData, handleDataChange, registerHandler, useHttpRequest] = useSignUpData();
	const {loading: isLoading, error} = useHttpRequest;
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2} >
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								value={registrationData.firstName}
								onChange={handleDataChange}
								id="firstName"
								label="First Name"
								autoFocus
								disabled={isLoading}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
								value={registrationData.lastName}
								onChange={handleDataChange}
								disabled={isLoading}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="login"
								label="Login"
								name="login"
								type="text"
								autoComplete="username"
								value={registrationData.login}
								onChange={handleDataChange}
								disabled={isLoading}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								type="email"
								autoComplete="email"
								value={registrationData.email}
								onChange={handleDataChange}
								disabled={isLoading}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={registrationData.password}
								error={registrationData.password.length < 6 && registrationData.password.length !== 0}
								onChange={handleDataChange}
								disabled={isLoading}
							/>
						</Grid>
					</Grid>
					{!!error && <Typography className={classes.errorWrapper}>
						{error}
					</Typography>}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						disabled={isLoading}
						className={classes.submit}
						onClick={registerHandler}
					>
						{isLoading && <CircularProgress className={classes.spinner} size={20} />}
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link component={'span'} variant="body2">
								<RouterLink className={classes.link} to={'/signIn'}>{"Already have an account? Sign in"}</RouterLink>
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}