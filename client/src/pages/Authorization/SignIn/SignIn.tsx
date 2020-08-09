import React from 'react';
import {
	Avatar,
	Button,
	Checkbox,
	CircularProgress,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import {Link as RouterLink} from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import useSignInData from "./useSignInData";

const SignIn = () => {
	const [authData, handleDataChange, loginHandler, useHttpRequest] = useSignInData();
	const {loading: isLoading, error} = useHttpRequest;
	const classes = useStyles();

	return <Grid container component="main" className={classes.root}>
		<CssBaseline />
		<Grid item xs={false} sm={4} md={7} className={classes.image} />
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate onSubmit={(e) => e.preventDefault()}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						disabled={isLoading}
						value={authData.email}
						onChange={handleDataChange('email')}
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
						disabled={isLoading}
						value={authData.password}
						onChange={handleDataChange('password')}
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox
							value="remember"
							color="primary"
							checked={authData.rememberMe}
							onChange={handleDataChange('rememberMe', 'checkbox')}
						/>}
						label="Remember me"
					/>
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
						onClick={loginHandler}
					>
						{isLoading && <CircularProgress className={classes.spinner} size={20} />}
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link component={'span'} variant="body2">
								<RouterLink className={classes.link} to={'/forgotPassword'}>Forgot password?</RouterLink>
							</Link>
						</Grid>
						<Grid item>
							<Link component={'span'} variant="body2">
								<RouterLink className={classes.link} to={'/signUp'}>{"Don't have an account? Sign Up"}</RouterLink>
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Grid>
	</Grid>;
};
SignIn.propTypes = {
};
SignIn.defaultProps = {
};
export default SignIn;