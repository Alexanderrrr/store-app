<template>
  <div>
    <h1>App Products</h1>
    {{ products }}

  </div>

</template>

<script>
import productService from '../services/ProductService.js'

export default {
  data(){
    return {
      products: productService.list()
    };
  }
}
</script>

<style lang="css">
</style>
