<template>
  <div id="app" class="container">
    <Monto />
    <h1 class="title-prin text-center">Pago Proveedor</h1>
    <hr class="hr p-1" />
 
    <div class="container row">
      <Form  />
      <Table  />
      
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";
import Monto from "./components/Monto.vue";
import "bootstrap/dist/css/bootstrap.min.css";


export default {
  name: "App",
  components: {
    Monto,
    Form,
    Table,
  },
  updated(){
    console.log(this.dataTable)
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
