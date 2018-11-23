<template>
  <div>
  <h3>Add Costumer</h3>
  <form @submit.prevent="addCostumer">
    <label>Full Name</label>
    <input v-model="newCostumer.fullName" placeholder="full name"><br>

    <label>Email</label>
    <input v-model="newCostumer.email" placeholder="email"><hr>

    <button type="submit">Add Costumer</button>
  </form>
</div>
</template>

<script>
import CostumerService from '../services/CostumerService'

export default {
  data(){
    return {
    newCostumer: {}
  }},

  methods: {
    addCostumer(){
      CostumerService.add(this.newCostumer)
      this.newCostumer = {}
    }
  }
}
</script>

<style lang="css">
</style>
