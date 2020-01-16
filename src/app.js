// import React from "react";
// import ReactDOM from "react-dom";
// import Counter from "./counter";
// import { AppContainer } from "react-hot-loader";

// function render(Component) {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById("react-root")
//   );
// }

// render(Counter);

// if(module.hot) {
//   module.hot.accept("./counter.js", () => {
//     const NewCounter = require("./counter").default
//     render(NewCounter); 
//   })
// }

import Vue from "vue";
import App from "./App.vue";
import Profile from "./components/profile";
import "./main.css";

window.onload = function () {
  new Vue({
    el: "#app",
    components: { Profile },
    render: h => h(App)
  })
}