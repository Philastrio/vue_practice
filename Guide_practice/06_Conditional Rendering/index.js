const v1 = new Vue({
  el: "#test1",
  data: {
    awesome: true
  }
});

const v2 = new Vue({
  el: "#test2",
  data: {
    ok: true
  }
});

const v3 = new Vue({
  el: "#test3",
  data: { result: "no cal" },
  computed: {
    dresult: function() {
      return Math.random() > 0.5;
    }
  }
});
