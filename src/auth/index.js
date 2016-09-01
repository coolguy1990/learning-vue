const API_URL = 'http://api.enchanting.dev/';
const LOGIN_URL = API_URL + 'login';
const PROFILE_URL = API_URL + 'user/profile';

export default {

	login(context, creds, redirectUrl) {

		context.$http.post(LOGIN_URL, creds)
			.then((response) => {
				localStorage.token = response.data.token;
				context.$router.replace('/home');
			}, (error) => {
				console.log(error);
			});
	},

	logout(context) {
		delete localStorage.token;
	},

	checkAuth() {
		const jwt = localStorage.token;

		if (jwt) {
			return true;
		} else {
			return false;
		}
	},

	getUserProfile(context, cb) {
		context.$http.get(PROFILE_URL, {
			headers: {
				'Authorization': 'Bearer '+ localStorage.token
			}
		})
		.then((response) => {

			cb(response.data);
		}, (error) => {
			console.log(error);
		});
	},

	loggedIn () {
		return !!localStorage.token;
	}
}
