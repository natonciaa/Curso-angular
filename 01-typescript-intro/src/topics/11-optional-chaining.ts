export interface Passenger{
    name: string;
    children?: string[]
}

const passenger1: Passenger={
    name:'nat',
}

const passenger2 : Passenger= {
    name: 'angie',
    children: ['nat', 'sofia'],
}

const printChildren = ()=>{
    return null;
}