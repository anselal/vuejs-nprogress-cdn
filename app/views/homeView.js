homeTemplate = `
<template id='home-template'>
  <div>
	<div class="w3-bar w3-black">
      <router-link to="/" exact-active-class="w3-blue" class="w3-bar-item w3-button">Home</router-link>
      <router-link to="/about" exact-active-class="w3-blue" class="w3-bar-item w3-button">About</router-link>
      <router-link to="/breeds" exact-active-class="w3-blue" class="w3-bar-item w3-button">Breeds</router-link>
      <router-link to="/contact" exact-active-class="w3-blue" class="w3-bar-item w3-button">Contact</router-link>
	</div>
	<div class="w3-container">
	  <h1>Home View</h1>
	</div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <div class="w3-container">
          <router-view></router-view>
        </div>
      </keep-alive>
    </transition>
	<p v-if="breeds">{{ breeds.userId }}, {{ breeds.id }}</p>
  </div>
</template>
`;

const HomeView = {
	name: 'HomeView',
	template: homeTemplate,
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