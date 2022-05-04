<template>
  <div>
    <h1>welcome to {{ title2 }}!</h1>
    <input type="text" v-model="input1" />
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>

    <select class="form-control" v-model="region" @change="changeRegion">
      <!-- 요소 안에서 접근할 때 : 사용, 값을 사용할 때 {{}} 사용 -->
      <option :key="i" :value="d.v" v-for="(d, i) in options">
        {{ d.t }}
      </option>
    </select>

    <table class="table table-border">
      <tr :key="i" v-for="(d, i) in options">
        <td>{{ d.v }}</td>
        <td>{{ d.t }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MainPage",

  data() {
    return {
      title: "개발자의 품격",
      title2: "Seoul",
      input1: "abcd",
      options: [
        {
          v: "S",
          t: "Seoul",
        },
        {
          v: "J",
          t: "Jeju",
        },
        {
          v: "B",
          t: "Busan",
        },
      ],
      region: "J",
    };
  },

  watch: {
    // input1 데이터가 변경되면 호출된다.
    input1() {
      console.log("watch : ", this.input1);
    },
  },

  methods: {
    getData() {
      console.log(this.input1);
    },
    setData() {
      this.input1 = "12345";
    },
    changeRegion() {
      console.log("test");
      alert(this.region);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
