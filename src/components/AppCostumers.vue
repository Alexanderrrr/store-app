<template lang="html">
  <div>
    <h1>App Costumers</h1>
    <table border=1>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>email</th>
        <th>Remove button</th>
        <th>Latest Purchases</th>
      </thead>
      <tbody>
        <tr v-for="(costumer, index) in costumers" :key="index">
          <td>{{ costumer.id }}</td>
          <td>{{ costumer.fullName }}</td>
          <td>{{ costumer.email }}</td>
          <td>
            <router-link :to="{ name: 'costumer-details', params: {id: costumer.id}}">Latest Purchases</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click='removeCostumer(costumer)'>Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import CostumerService from '../services/CostumerService'

export default {
  data(){
    return{
      costumers: CostumerService.list(),
    }
  },

  methods: {
    removeCostumer(costumer){
      CostumerService.remove(costumer);
    }
  }
}
</script>

<style lang="css">
</style>
