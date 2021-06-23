<template class="table">
  <section>
    <table class="table table-hover">
      <thead class="table-header">
        <tr>
          <th scope="col">Pago</th>
          <th scope="col">Porcentaje</th>
          <th scope="col">Moneda</th>
          <th scope="col">Monto</th>
          <th scope="col" colspan="2">Monto Cambio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Pago Nro1</strong><br /><small>2021-06-18</small></td>
          <td>50%</td>
          <td>AWG</td>
          <td>10000</td>
          <td>7000</td>
          <td>USD</td>
        </tr>
        <tr>
          <td><strong>Pago Nro2</strong> <br /><small>2021-06-05</small></td>
          <td>50%</td>
          <td>AWG</td>
          <td>10000</td>
          <td>5555</td>
          <td>EURO</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style>
@import "../assets/css/styles.css";
</style>