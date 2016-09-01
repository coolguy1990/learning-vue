<template>
	<div class="col-sm-6 col-sm-3">
		<h1>Get User profile</h1>
		<div class="container">
			<p>{{ user }}</p>
		</div>
	</div>
</template>

<script>
	import auth from '../auth';

	export default {
		data() {
			return {
				user: null
			};
		},
		methods: {
			getUserProfile() {
				var that = this;
				auth.getUserProfile(that, function (data) {
					that.user = data;
				});
			}
		},
		created: function () {
			this.getUserProfile();
		}
	}
</script>
