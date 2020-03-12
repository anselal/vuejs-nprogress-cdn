homeView = `
<template id="root-template">
  <div>
    <div class="w3-bar w3-black">
      <router-link to="/" exact-active-class="w3-blue" class="w3-bar-item w3-button">Home</router-link>
      <router-link to="/about" exact-active-class="w3-blue" class="w3-bar-item w3-button">About</router-link>
      <router-link to="/breeds" exact-active-class="w3-blue" class="w3-bar-item w3-button">Breeds</router-link>
      <router-link to="/contact" exact-active-class="w3-blue" class="w3-bar-item w3-button">Contact</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <div class="w3-container">
          <router-view></router-view>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>
`;
