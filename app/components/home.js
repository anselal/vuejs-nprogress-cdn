template = `
<template id='home-template'>
  <div>
	<h1>Home Page</h1>
	<transition name="fade" mode="out-in">
	  <keep-alive>
		<router-view></router-view>
	  </keep-alive>
	</transition>
	<p v-if="breeds">{{ breeds.userId }}, {{ breeds.id }}</p>
  </div>
</template>
`;

const HomePage = {
	name: 'HomePage',
	template: template,
	data: function () {
		return {
			breeds: null
		}
	},
	methods: {
		ax() {
			axios.get('https://jsonplaceholder.typicode.com/todos/1')
				.then(function (response) {
					this.breeds = response.data;
					console.log(this.breeds);
				});
		}
	},
	created() {
		setTimeout(() => {
			this.ax();
		}, 2000);
	}
}