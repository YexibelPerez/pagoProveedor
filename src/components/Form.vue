<template>
  <div>
    <div>
      <form action="">
        <h1>Pagos al Proveedor</h1>
        <span>Monto Total a Pagar: 20000$</span>

        <div class="columns bg-danger">
          <div class="form-group">
            <label>Porcentaje de Pago Nro</label><br />
            <input class="form-control" type="text" placeholder="0" />
          </div>
          <div class="form-group">
            <label>Monto de Porcentaje Agregado</label><br />
          <input class="form-control" readonly type="text" placeholder="0" />
          </div>
        </div>

        <div class="columns">

          <label>Fecha a Pagar Porcentaje</label><br />
          <span>dd/mm/aa ICONO</span>

          <label>Moneda</label><br />
          <select>
            <optgroup>
              <option value="">USD</option>
              <option value="">EURO</option>
              <option value="">PESOS</option>
            </optgroup>
          </select>
        </div>
        <button type="button" class="btn btn-success">Guardar Pagos</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form" /*,
  data() {
    return {
      subtitulo: "soy un subtitulo",
    }
  }*/,
};
</script>