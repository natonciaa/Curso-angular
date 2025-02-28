export function whatsMyType<T>(argument: T):T{
    return argument;
}

let amIstring = whatsMyType<string>('hallo prro');
let amINumber = whatsMyType<number>(33);
let amIArray = whatsMyType<number[]>([1,2,4,5,6]);
console.log(amIstring.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));