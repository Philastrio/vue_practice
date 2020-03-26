Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>"
});

const app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Vegetables1" },
      { id: 2, text: "Vegetables2" }
    ]
  }
});
