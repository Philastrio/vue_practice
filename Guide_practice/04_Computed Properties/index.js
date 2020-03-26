const vm = new Vue({
  el: "#example",
  data: {
    message: "Hello"
  },
  computed: {
    // a computed getter
    reverseMessage: function() {
      // 'this' points to the vm instance
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

const vm2 = new Vue({
  el: "#example2",
  data: {
    message: "Hello"
  },
  methods: {
    // a computed getter
    reverseMessage: function() {
      // 'this' points to the vm instance
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

const vm3 = new Vue({
  el: "#example3",
  data: { today: "" },
  computed: {
    nowReturnValue: function() {
      return Date();
    }
  }
});

const vm4 = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar"
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
  }
});

const vm5 = new Vue({
  el: "#example4",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar"
  },
  computed: {
    fullName: {
      // getter
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function(newValue) {
        const names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});
