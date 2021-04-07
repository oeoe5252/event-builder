<template>
  <div class="container mx-auto">
    <layout-header></layout-header>
    <div class="container mx-auto">
      <layout-navigation></layout-navigation>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import LayoutHeader from "@/layouts/Header.vue";
import LayoutFooter from "@/layouts/Footer.vue";
import LayoutNavigation from "@/layouts/Navigation.vue";

@Component({
  components: {
    LayoutHeader, LayoutFooter, LayoutNavigation
  }
})
export default class Layout extends Vue {}
</script>

<style>
html, body {
  margin: 0;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
