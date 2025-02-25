export interface Product{
    description:string;
    price:number;   
}

const phone: Product={
    description:'Nokia',
    price: 150.0
}

const tablet: Product={
    description:'iPad',
    price:250.0
}
export interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}
export function taxCalculation(options: TaxCalculationOptions ): [number,number]{
    let total = 0;
    const {tax, products}= options;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total*options.tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxResult] = taxCalculation({
    products: shoppingCart,
    tax,
});

console.log('Total', total);
console.log('Tax', taxResult);
export{}