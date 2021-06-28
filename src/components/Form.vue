<template>
  <div class="col-12 col-md-6 shadow p-3">
    <div>
      <form action="">
        <h1 class="title-secun">Pagos al Proveedor</h1>
         
        <span class="gris">Monto Total a Pagar: {{montoData.monto}} {{montoData.moneda}}</span>
        <span class="gris">Porcentaje restante: {{porcentajeTotal}}%</span>
        <div class="row py-2">
          <div class="form-group col-12 col-md-6">
            <label><small>Porcentaje de Pago Nro {{numeroPago}}</small></label
            ><br />
            <input  v-on:keyup="verifica" v-model.number="porcentaje" class="form-control" type="number"  min="0" max="100" placeholder="0" />
          </div>
          <div class="form-group col-12 col-md-6">
            <label><small>Monto de Porcentaje Agregado</small></label
            ><br />
            {{(montoData.monto && porcentaje > 0) ? (montoData.monto*porcentaje)/100 : 0}}
            <!-- <input v-model="montoPorcentaje" class="form-control" readonly type="number" /> -->
          </div>
        </div>

        <div class="row py-2">
          <div class="col-12 col-md-6 form-group">
            <label><small>Fecha a Pagar Porcentaje</small></label
            ><br />
            <input v-model="fecha" type="date" class="form-control" />
          </div>
          <div class="col-12 col-md-6 form-group">
            <label><small>Moneda</small></label
            ><br />
            <select v-model="moneda" class="form-control">
              <option v-for="(value, index) in result.rates" v-bind:item="value" v-bind:index="index" v-bind:key="index" v-bind:value="index">
                  {{index}}
              </option>
            </select>
          </div>

        </div>  
        <!--v-on  :click="fetch" -->
        <button @click.prevent="pagoProveedor()" class="btn btn-success m-4">
          Guardar Pagos
        </button>
        <p v-if="errors.length">
          <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
          <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          </p>  
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  data: () => ({
    errors: [],
    result: [],
    numeroPago:1,
    porcentaje:0,
    montoPorcentaje:0,
    moneda:'',
    fecha:'',
    montoProveedor:0,
    monedaProveedor:'',
    porcentajeTotal:100,
    tabla:[],
  }),
  methods:{
    verifica: function({target}){
      
      if(target.value < 0){
        target.value=0
      }
      if(target.value > 100){
        target.value=100
      }
    },

    pagoProveedor: function (e) {
      
        this.errors = [];

          let resta=this.porcentajeTotal-this.porcentaje

          if (!this.porcentaje) {
            this.errors.push('El Porcentaje es obligatorio.');
          }
          
          if ( this.porcentaje < 0 || this.porcentaje > 100){
            this.errors.push('El porcentaje debe estar entre 0 y 100');
          }
          
          if (!this.moneda) {
            this.errors.push('La moneda es obligatoria.');
          }
          if (!this.fecha) {
            this.errors.push('La fecha es obligatoria.');
          }
          if (!this.montoProveedor) {
            this.errors.push('El monto es obligatoria.');
          }
          if (!this.monedaProveedor) {
            this.errors.push('La moneda es obligatoria.');
          }
          
          if (resta<0){
            this.errors.push('Ya completo el 100%');
            
          }else{
            this.porcentajeTotal=resta;
            
          }
           if (this.porcentaje!==0 && this.moneda!=='' && this.fecha!=='' && this.montoProveedor!==0 && this.monedaProveedor!=='' && resta>=0  ) {
          
          let porcent=(this.montoData.monto*this.porcentaje)/100;
          let valorCambio=(this.result.rates[this.moneda] / this.result.rates[this.montoData.moneda]) * porcent;
          let data={
            pago:'Pago Nro '+this.numeroPago,
            porcentaje:this.porcentaje+'%',
            moneda:this.montoData.moneda,
            monto:this.montoData.monto,
            montoCambio:valorCambio.toFixed(2),
            monedaCambio:this.moneda,
            fecha:this.fecha,
            
          }
          this.numeroPago=this.numeroPago+1;
          this.tabla=[...this.tabla,data]
          this.$emit("tabla",this.tabla)
          
          
      }
        e.preventDefault();
         
      }
    },

    /*pagoProveedor(){
      if(this.montoData!==null){
        
        let porcent=(this.montoData.monto*this.porcentaje)/100;
        let valorCambio=(this.result.rates[this.moneda] / this.result.rates[this.montoData.moneda]) * porcent;
        let data={
          pago:'Pago Nro '+this.numeroPago,
          porcentaje:this.porcentaje+'%',
          moneda:this.montoData.moneda,
          monto:this.montoData.monto,
          montoCambio:valorCambio.toFixed(2),
          monedaCambio:this.moneda,
          fecha:this.fecha
        }
        this.numeroPago=this.numeroPago+1;
        this.tabla=[...this.tabla,data]
        this.$emit("tabla",this.tabla)
      }
    }
  }*/
  updated(){
    if(this.montoData.monto){
        this.montoProveedor=this.montoData.monto;
        this.monedaProveedor=this.montoData.moneda;
      }
  },
  mounted() {
    let vue = this
    axios.get("http://data.fixer.io/api/latest?access_key=83b737752d8bd5c366ad2b63a1efb1f0")
    .then((res) => {
      vue.result = res.data;
    })
  },
  props:['montoData'],
};
</script>