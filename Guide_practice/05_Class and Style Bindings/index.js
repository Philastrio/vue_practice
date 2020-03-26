const vm = new Vue({
  el: "#test",
  data: {
    isActive: true,
    hasError: false
  }
});

const vm2 = new Vue({
  el: "#test2",
  data: {
    classObject: {
      active: false,
      "text-danger": true
    }
  }
});

const vm3 = new Vue({
  el: "#test3",
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal"
      };
    }
  }
});

const vm4 = new Vue({
  el: "#test4",
  data: {
    activeClass: "active",
    errorClass: "text-danger"
  }
});

const vm5 = new Vue({
  el: "#test5",
  data: {
    activeClass: "active",
    errorClass: "text-danger"
  }
});
const vm6 = new Vue({
  el: "#test6",
  data: {
    activeClass: "active",
    errorClass: "text-danger"
  }
});
const vm7 = new Vue({
  el: "#test7",
  data: {
    activeColor: "red",
    fontSize: 30
  }
});
const vm8 = new Vue({
  el: "#test8",
  data: {
    styleObject: {
      color: "red",
      fontSize: "50px"
    }
  }
});
