const initialState = {
  products:[],
  address:[],
  discount:0,
  delivey:0
};


export default (state = initialState, action) => {
  switch(action.type) {
      case 'ADD_PRODUCT':
        let products = [...state.products]; // cópia do products
          let id = action.payload.data.id; // id do produto que esta sendo procurado
          
          let index = products.findIndex(item => item.id === id);

          if (index > -1) {
            products[index].qt += action.payload.qt;
          } else {
            products.push({
              ...action.payload.data,
              qt: action.payload.qt
            });
          }
          
          return {...state, products};
      break;
  }  
  return state;
}