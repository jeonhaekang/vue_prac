<template>
  <div>
    <h1>SignUp</h1>
    <div>
      <input v-model="id" type="text" />
    </div>
    <div>{{ idReverse }}</div>
    <div>
      <input v-model="password" type="password" />
    </div>
    <button @click="signup">회원가입</button>
  </div>
</template>

<script>
export default {
  name: "SignupPage",

  data() {
    return {
      id: "",
      password: "",
    };
  },

  computed: {
    idReverse() {
      return this.id.split("").reverse().join("");
    },
  },

  watch: {
    id() {
      console.log("아이디 입력");
    },
  },

  methods: {
    signup() {
      const HOST = "http://kangtest.com";
      this.$axios.post(
        `${HOST}/test`,
        { headers: { token: "token" } },
        { id: this.id, password: this.password }
      );
    },

    clickHandler(e) {
      if (!this.id || !this.password) {
        console.log("아이디와 패스워드를 입력해주세요.");

        return;
      }

      console.log("value : ", e.currentTarget.value);

      const user = {
        id: this.id,
        password: this.password,
      };

      localStorage.setItem("user", JSON.stringify(user));
    },
  },
};
</script>
