const products = [
  {
    name: 'htp'
  },

  {
    name: 'lenovo'
  },
  {
    name: 'siemens'
  },
  {
    name: 'hp'
  },
  {
    name: 'genius'
  },
  {
    name: 'motor'
  },
];


class ProductService {

  list(){
    return products;
  }
}

const productService = new ProductService();
export default productService;
