<template>
  <div id="app" class="container">
    <Monto @data='dataMonto = $event' />
    <h1 class="title-prin text-center">Pago Proveedor</h1>
    <hr class="hr p-1" />
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container row">
      <!--<router-link to="/Monto">Monto Total</router-link>
      <router-link to="/Pagos">Monto Total</router-link>-->
      
      <Form :montoData="dataMonto" @tabla="dataTable = $event" />
      <Table :dataTable="dataTable" />
      
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
   data: () => ({
    dataMonto:{},
    dataTable:[]
  }),
  updated(){
    console.log(this.dataTable)
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
