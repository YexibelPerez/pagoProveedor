<template>
  <div id="app" class="container">
    <h1 class="title">Pago Proveedor <hr class="hr"/></h1>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Form></Form>
    <Table></Table>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Form,
    Table,
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
