import Vue from "vue";

export default Vue.component("Profile", {
  data: () => ({
    name: 'Youssef'
  }),
  template: `
    <div class="profile" >
      <img src="./images/link.jpg" />
      <h1>{{ name }} Journal</h1>
    </div>
  `
})