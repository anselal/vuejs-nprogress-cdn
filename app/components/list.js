listTemplate = `
<template id="list-template">
  <div>
    <h1>Contact Page</h1>
    <input type="text" v-model="newContact" placeholder="Name" />
    <button @click="addContact">Add Contact</button>
    <button @click="sortContacts">Sort</button>
    <button @click="resetContacts">Reset</button>

    <transition-group name="slide-up" tag="ul" appear>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>

  </div>
</template>
`;

const ListPage = {
  name: 'ListPage',
  template: listTemplate,
  data: function() {
    return {
      newContact: '',
      contacts: ['Beau Thabeast', 'Cindy Rella', 'Alice Vunderlind']
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact)
      this.newContact = ''
    },
    sortContacts() {
      this.contacts.sort()
    },
    resetContacts() {
      this.contacts = ['Beau Thabeast', 'Cindy Rella', 'Alice Vunderlind'];
    }
  }
}