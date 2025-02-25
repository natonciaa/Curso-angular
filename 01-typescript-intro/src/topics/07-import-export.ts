import{ Product, TaxCalculationOptions,taxCalculation  } from './06-function-destructuring'
const shoppingCart: Product[] = [{
    description:'Nokia',
    price: 100
},{
    description:'iPad',
    price:250.0
}];

const [total, tax] = taxCalculation({});
console.log('Total', total);
console.log('Tax', tax);