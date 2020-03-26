const app = new Vue({
  el: "#app",
  data: {
    message: "안녕하세요. 뷰는 제대로 쓰고 싶다 ㅠㅠ"
  }
});

////////////////////////////////////////////////////////////////////////
const app2 = new Vue({
  el: "#app-2",
  data: {
    message: "이 페이지는 " + new Date() + "에 로드 되었습니다"
  }
});

////////////////////////////////////////////////////////////////////////
const app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});

////////////////////////////////////////////////////////////////////////
const app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn Javascript" },
      { text: "Learn Vue" },
      { text: "Building something awesome" }
    ]
  }
});

const app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue JS!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
  // arrow 함수는 작동안됨
});

const app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello vue!"
  }
});
