breedTemplate = `
<template id="breeds-template">
  <div>
    <h1>Breeds Page</h1>
    <div>
      <h2 v-if="name">Name: {{ name }}</h2>
      <h2 v-else>No name variable defined</h2>
    </div>
    <button class="w3-button w3-blue" @click="get_breeds">Get Breeds with axios</button>
    <button class="w3-button w3-light-grey" @click="clear_breeds">Clear Breeds</button>
    <template v-if="local_breeds">
      <ul>
        <li v-for="(value, key) in local_breeds" :key="key">
          {{ key }} - {{ value }}
        </li>
      </ul>
    </template>
    <template v-else>
      <h2>No breeds retrieved yet</h2>
    </template>
  </div>
</template>
`;

const BreedsPage = {
  name: 'BreedsPage',
  template: breedTemplate,
  data: function() {
    return {
      local_breeds: null,
      name: "Anastasios Selalmazidis"
    }
  },
  methods: {
    get_breeds() {
      axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response =>
          this.local_breeds = response.data.message,
          console.log(this.local_breeds)
        );
    },
    clear_breeds() {
      this.local_breeds = null;
    }
  },
}