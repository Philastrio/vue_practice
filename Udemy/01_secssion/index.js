new Vue({
  el: "#app",
  data: {
    title: "Hello world",
    link: "https://google.com",
    finishedLink: "<a href='http://google.com'>Google_Completed</a>",
    name: "han-kang"
  },
  methods: {
    sayHello: function() {
      this.title = "Hello!";
      return this.title;
    }
  }
});
