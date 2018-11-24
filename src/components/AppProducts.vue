<template>
  <div>

    <ul v-for="product in products">
      <li>Product- {{ product.name }} | Amount: {{product.amount}}</li>
      <button @click='changeProductAmount(product.name, "add")'> + </button>
      <button @click='changeProductAmount(product.name, "minus")'> - </button>
    </ul>

  </div>

</template>

<script>
import productService from '../services/ProductService.js'

export default {
  data(){
    return {
      products: productService.list()
    };
  },

  methods: {
    changeProductAmount(name, value){
      productService.changingAmount(name, value);
    }
  }
}
</script>

<style lang="css">
</style>
