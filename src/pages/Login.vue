<template>
  <div>
    test
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import Auth from "@/store/modules/Auth";

@Component
export default class Login extends Vue {

  mounted() {
    Auth.login({
      email: 'mason',
      password: '123123123'
    });
  }

}
</script>
