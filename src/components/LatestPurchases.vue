<template>
  <div>
    <h1>Latest Purchases</h1>
    {{ costumerDetails.fullName }}<br>
    {{  costumerDetails.email  }}<br>
    {{ costumerDetails.products }}<br>
    <router-link to="/costumers">Go To All Costumers</router-link>
  </div>

</template>

<script>
import CostumerService from '../services/CostumerService.js'

export default {

  computed: {
    costumerDetails(){
      return CostumerService.getUserById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
