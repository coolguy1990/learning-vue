<template>
	<div class="col-sm-6 col-sm-3">
		<div class="container">
			<p>adda</p>
		</div>
	</div>
</template>

<script>
	import auth from '../auth';

	export default {
		data() {
			return {
				user: '',
			}
		},
		methods: {
			logoutUser() {
				auth.logout(this);
			}
		}
	};
</script>
