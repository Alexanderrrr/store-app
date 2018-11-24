const products = [
  {
    name: 'htp',
    amount: 0,
  },

  {
    name: 'lenovo',
    amount: 0,
  },
  {
    name: 'siemens',
    amount: 2,
  },
  {
    name: 'hp',
    amount: 0,
  },
  {
    name: 'genius',
    amount: 0,
  },
  {
    name: 'motor',
    amount: 0,
  },
];


class ProductService {

  list(){
    return products;
  }

  changingAmount(name, value){
    let product = products.filter(product => product.name == name)
    product.map(pr => {
      if (pr.amount < 0) {
        pr.amount = 0;
        return alert("Product " + pr.name + " amount is 0")

      }
      else if (value === "add") {
        pr.amount++
      }
      else if (value === "minus" ) {
          pr.amount--
      }

    });
  }
}

const productService = new ProductService();
export default productService;
