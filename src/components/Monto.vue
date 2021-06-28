<template>
    <div class="shadow p-3">
      <form>
        <h1 class="title-prin text-center">Monto a Pagar</h1>
        <hr class="hr p-1" />

        <p v-if="errors.length">
          <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
          <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          </p>

        <div class="row py-2">
          <div class="form-group  col-12 col-md-6">
            <label><small>Monto Total a Pagar:</small></label><br />
            <input class="form-control" type="number" ref="monto" v-model="cantidad" placeholder="Ingrese el monto total" />
          </div>
          <div class="form-group col-12 col-md-6">
            <label><small>Moneda</small></label><br/>
            <select v-model="monedaMonto" ref="moneda" class="form-control">
                
                <option v-for="(value, index) in result.rates" v-bind:item="value" v-bind:index="index" v-bind:key="index" v-bind:value="index">
                  {{index}}
              </option>
                
            </select>
          </div>
        </div>
        
        <button type="submit" class="btn btn-success m-4" @click.prevent="checkForm">Guardar Monto</button>
          
      </form>

    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Form" ,
  data: () => ({
    errors: [],
    result: [],
    monedaMonto:'',
    cantidad:0,
  }),
  methods:{
    checkForm: function (e) {
      this.errors = [];

      if (!this.cantidad) {
        this.errors.push('La cantidad es obligatoria.');
      }
      if (!this.monedaMonto) {
        this.errors.push('La moneda es obligatoria.');
      }
      
      if (this.cantidad && this.monedaMonto) {
        this.$emit('data',{moneda:this.monedaMonto, monto:this.cantidad})
      }

      e.preventDefault();
    }
  },
  mounted(){
    let vue = this
   axios.get("http://data.fixer.io/api/latest?access_key=83b737752d8bd5c366ad2b63a1efb1f0")
    .then((res) => {
      vue.result = res.data;
    })
  },
};
</script>