const costumers = [
  {
    id:1,
    fullName:'Ivana Zoric',
    email: 'ivana@zoric.com',
    products:[],
  },

  {
    id:2,
    fullName:'Aleksandar Nojic',
    email: 'acons@gmail.com',
    products:[],
  },
  {
    id:3,
    fullName:'Alek',
    email: 'alek@gmail.com',
    products:[],
  },

];

let nextId = 4;

class CostumerService {
  list() {
    return costumers;
  }

  remove(costumer){
    costumers.splice(costumers.indexOf(costumer), 1)
  }
}

const costumerService = new CostumerService();
export default costumerService;
