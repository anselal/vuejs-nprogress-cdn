homeTemplate = `
<template id='home-template'>
  <div>
    <!-- Top bar -->
    <div class="w3-bar w3-black">
      <button class="w3-button w3-green w3-hide-large w3-left" onclick="toggle_sidebar('block')">&#9776;</button>
      <router-link to="/" exact-active-class="w3-blue" class="w3-bar-item w3-button">Home</router-link>
      <router-link to="/breeds" exact-active-class="w3-blue" class="w3-bar-item w3-button">Breeds</router-link>
      <router-link to="/contact" exact-active-class="w3-blue" class="w3-bar-item w3-button">Contact</router-link>
      <router-link to="/list" exact-active-class="w3-blue" class="w3-bar-item w3-button">List</router-link>
      <router-link to="/about" exact-active-class="w3-blue" class="w3-bar-item w3-button w3-right">About</router-link>
    </div>

    <!-- Sidebar -->
    <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style="width:200px;z-index:5" id="mySidebar">
      <button class="w3-bar-item w3-button w3-hide-large"
      onclick="toggle_sidebar('none')">Close &times;</button>
      <a href="#" class="w3-bar-item w3-button">Link 1</a>
      <a href="#" class="w3-bar-item w3-button">Link 2</a>
      <a href="#" class="w3-bar-item w3-button">Link 3</a>
    </div>

    <!-- Overlay -->
    <div class="w3-overlay" onclick="toggle_sidebar('none')" style="cursor:pointer" id="myOverlay"></div>

    <!-- Router View -->
    <div class="w3-main" style="margin-left:200px">
      <div class="w3-container">
        <h1>Home View</h1>
        <transition name="slide-fade" mode="out-in">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
    
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
        .then(response => {
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

function toggle_sidebar(style) {
  document.getElementById("mySidebar").style.display = style;
  document.getElementById("myOverlay").style.display = style;
}
