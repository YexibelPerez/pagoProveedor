<template class="table">
  <section class=" col-12 col-md-6">
    <table class="table table-hover">
      <thead class="table-header bg-table text-white">
        <tr>
          <th scope="col">Pago</th>
          <th scope="col">Porcentaje</th>
          <th scope="col">Moneda</th>
          <th scope="col">Monto</th>
          <th scope="col" colspan="2">Monto Cambio</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="value in dataTable" v-bind:item="value" v-bind:index="index" v-bind:key="value.pago" v-bind:value="index">
          <td><strong>{{value.pago}}</strong> <br /><small>{{value.fecha}}</small></td>
          <td>{{value.porcentaje}}</td>
          <td>{{value.moneda}}</td>
          <td>{{value.monto}}</td>
          <td>{{value.montoCambio}}</td>
          <td>{{value.monedaCambio}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "Table",

  updated(){
    if(this.dataTable){
      return true
    }
  },
  props:['dataTable']
};

</script>

<style>
@import "../assets/css/styles.css";
</style>